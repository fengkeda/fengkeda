[TOC]
#day09自动化构建


###为什么需要前端构建
* 自动文件合并/压缩
* 自动编译
* 自动刷新
* 自动部署
* 性能优化（按需加载）


###构建环境

####NodeJS

####npm（node package manager）
nodejs的包管理器，用于node插件管理（包括安装、卸载、管理依赖等）
官网：<https://www.npmjs.com/>

>PS：nodejs安装成功后，npm就安装成功了。

* 安装包
格式：`npm install <name> [-g] [--save-dev]`
    - 本地安装：
    用npm安装一个包，安装的位置为命令提示符所在的当前目录node_modules
    ```
    示例：npm install packagename
    ```

    - 全局安装：-g（global）
    用npm全局安装一个包，需要添加一个参数-g，安装的位置为当前用户下的%userprofile%\AppData\Roaming\npm\node_modules
    ```
    示例：npm install -g packagename
    ```
    >PS：全局安装可以通过命令行在任何地方调用它，本地安装通过require()调用

    - 保存包的信息到package.json：--save
    ```
    示例：npm install --save bootstrap
    ```
    
    + --save：将保存配置信息至package.json（项目配置文件）里的dependencies ；
    + -dev：开发依赖，保存至package.json的devDependencies节点 ，只在开发环境需要，生产环境不需要，如：gulp，不指定-dev将保存至dependencies节点；一般保存在dependencies的像这些express/ejs/body-parser等等。
    >PS：为什么要保存至package.json？因为node插件包相对来说非常庞大，所以不加入版本管理，将配置信息写入package.json并将其加入版本管理，其他开发者对应下载即可（命令提示符执行npm install，则会根据package.json下载所有需要的包，npm install --production只下载dependencies节点的包）。

    - 安装指定版本使用@
    ```
    示例：npm install packagename@version
    ```


* 卸载包
格式：`npm uninstall <name> [-g] [--save-dev]`
    ```
    示例：npm uninstall bootstrap
    ```

    PS：不要直接在资源管理器里删除本地插件包，而是通过npm uninstall来删除，参数使用与包安装一样


* 更新包
格式：`npm update <name> [-g] [--save-dev]`
更新全部插件：npm update [--save-dev]

* 初始化操作npm init
给项目添加一个配置文件：package.json
用npm init 可以初始化一个 package.json文件，用回答问题的方式生成一个新的 package.json 文件
npm 也有文档，这是 package.json的介绍：https://docs.npmjs.com/files/package.json

* 查看当前目录已安装插件：npm list

####cnpm：配置国内npm源（选装）
    npm install -g cnpm

注意：

 1. 安装完后最好查看其版本号cnpm -v或关闭命令提示符重新打开，安装完直接使用有可能会出现错误；
 2. cnpm跟npm用法完全一致，只是在执行命令时将npm改为cnpm


###构建工具
* gulp
* webpack
webpack是一款模块加载器兼打包工具，它能把各种资源，例如JS（含JSX）、coffee、样式（含less/sass）、图片等都作为模块来使用和处理。
官网是 http://webpack.github.io/
* grunt


###gulp常用插件
* htmml压缩 ：gulp-htmlmin
* css压缩：gulp-clean-css
* js压缩：gulp-uglify
* 合并文件：gulp-concat
* 文件重命名：gulp-rename
* 压缩图片文件：gulp-imagemin
* js语法检测：gulp-jshint
* 编译 Less：gulp-less
* 编译Sass: gulp-sass
* 创建本地服务器：gulp-connect

以上插件的使用方法请查看：
官网：https://www.npmjs.com/


