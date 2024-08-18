## 脚本功能介绍
- 截止目前主要功能就两个一个是对vue的template标签进行自定义tag插入，以及对插入的tag进行移除命令。
- 插入 vue-template-tag insertTag （ 简写：vue-template-tag -i ） 和 移除 vue-template-tag removeTag （ 简写：vue-template-tag -r ） 
- 默认仅对项目src下的.vue进行扫描处理，如需配置同级其他文件夹名称可以通过添加 -d 后面添加需要的文件夹，支持多个使用逗号隔开即可。举个🌰: vue-template-tag -i -d src1,src2 即可，这样程序就会把src(默认扫描文件夹名称) 和 src1,src2 进行一个去除重复名称的merge合并 得出 src,src1,src2 三个名称，即都是会被程序扫描的文件夹。
- 默认我们取的插入tag的名称叫 vue-template-tag 其值通过uuid v4方法生成的。如需要对tag的默认名称进行修改可以追加使用 -n 命令后面跟你自定义的名称即可。举个🌰 vue-template-tag -i -n my-template-tag-name 即可。