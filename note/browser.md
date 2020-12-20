##### 浏览器渲染过程

- 1. 获取服务器响应的 html 代码, 并且开辟一块栈内存用与给代码提供执行环境, 同时分配一个`主线程`去一行行的解析和执行代码

- 2. 当浏览器遇到 link, script, image, video 等资源标签后, 后开辟一块新的`线程`去获取对应的资源, `主线程`继续向下执行

- 3. TASK QUEUE 任务队列, 存储用于获取资源的任务

  - 任务 1: 请求 1.css
  - 任务 2: 请求 2.js
  - 任务 3: 请求 3.image
  - 任务 4: 请求 4.video
  - ...

- 4. 第一次自上而下执行完后成, 只生成 dom 树

- 5. 生成 dom 树后, 通过事件循环的机制(Event Loop) 从 TASK QUEUE 查询是否有任务已完成, 不断地查询直到所有 TASK QUEUE 完成

- 6. css 处理完成后生成 CSSOM

- 7. 根据生成的 dom 树和 CSSOM 生成 Render Tree 渲染树

- 8. 根据下面两个步骤，将 Render Tree 一步步渲染到页面
  - 重绘 Repaint, 样式相关(color, background-color, ...)
  - 回流 Reflow (也叫重排), 布局相关(width, position, ...)
  - 回流一定会触发重绘, 重绘不一定会触发回流

##### 渲染优化

- 读写分离

  - ```javascript
    ele.style.width = '100px'; // 第一次回流
    console.log(ele.clientWidth);
    ele.style.height = '100px';
    ele.style.margin = '100px'; // 与上面进行合并, 第二次回流

    // 分割线 -----

    ele.style.width = '100px';
    ele.style.margin = '100px';
    ele.style.height = '100px'; // 第一次回流
    console.log(ele.clientWidth); // 将读写进行分离, 只需进行一次回流
    ```

- 批量处理

  - ```javascript
    const ul = document.querySelector('ul');
    for (let i = 0; i < 5; i++) {
      const li = document.createElement('li');
      li.innerText = i;
      ul.appendChild(li);
    }
    // 一个循环触发了5次回流

    // 分割线 -----

    const frg = document.createDocumentFragment(); // 创建文档碎片
    for (let i = 0; i < 5; i++) {
      const li = document.createElement('li');
      li.innerText = i;
      frg.appendChild(li);
    }
    ul.appendChildren(frg);
    frg = null; // 销毁
    // 同样的功能, 只会触发一次回流

    // 分割线 -----

    const str = '';
    for (let i = 0; i < 5; i++) {
      str += `<li>${i}</li>`;
    }
    ul.innerHTML = str;
    // 同样的功能, 只会触发一次回流(相对文档碎片, 这是更常用做法)
    ```

- CSS3 硬件加速(避免回流)

  ```javascript
  ele.style.left = '100px'; // 向右移动 100px, 触发一场回流
  ele.style.transform = 'translateX(100px)'; // 同样向右移动 100px, 不会触发回流, transform 会规避回流
  ```

- 避免 table 布局(回流次数太多)
