- 多包单仓库开发模式
  - 开发思路
    - packages 目录用于存放各种不同的包
    - scripts 目录用于存放打包脚本
    - 执行打包脚本, 内部执行 rollup 命令进行打包
    - rollup 会读取不同包下的配置文件, 做出不同的打包方式
  - 优点
    - 方便包与包之间相互调用
  - 缺点
    - 仓库体积可能很大
