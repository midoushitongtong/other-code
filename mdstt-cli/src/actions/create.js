const axios = require('axios');
const ora = require('ora');
const inquirer = require('inquirer');

/**
 * create 的功能是创建项目
 * create 的大致逻辑
 *  - 从 git repo 获取项目列表，让用户选择安装那个项目
 *  - 用户选择完成后, 显示所选项目有哪些版本
 *  - 从 gie repo 获取版本号对应的项目，将项目生成到当前目录下
 *  - 可能期间还需要用户输入一些而外的配置, 来辅助项目生成
 */

// 通过 github api 获取 repo list
const fetchRepoList = async () => {
  const { data } = await axios.get('http://api.github.com/orgs/zhu-cli/repos');
  return data;
};

module.exports = async (projectName) => {
  // 1. 获取所有项目模板
  const spinner = ora('fetching template ...');
  spinner.start(); // 显示 loading
  let repos = await fetchRepoList();
  repos = repos.map((item) => item.name); // ['vue-simple-template', 'vue-template']
  spinner.succeed(); // 隐藏 loading

  // 2. 让用户选择一个项目模板
  const { repo } = await inquirer.prompt({
    name: 'repo',
    type: 'list',
    message: 'please choise a template to create project',
    choices: repos,
  });

  // 3. 获取项目对应的版本号
  console.log(repo);
};
