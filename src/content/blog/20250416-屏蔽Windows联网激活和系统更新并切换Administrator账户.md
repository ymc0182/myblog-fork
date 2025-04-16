---
title: '屏蔽 Windows 联网激活和系统更新并切换 Administrator 账户'
description: '1.用命令行方式跳过联网激活。 2.用注册表方式来延长 windows 暂停更新时间，并且无副作用。 3.切换到 Admin 用户并删除其他用户。'
author: 'Mr.Yuan'
date: 2025-04-16

draft: false
---

昨天下载了一个开源磁力链接下载器，结果给我装了一堆软件还卸不掉只能格式化😡，Github 下载东西也要谨慎。

以下是重装 Windows 三部曲，记录备忘。




## 跳过引导页联网激活

在安装前拔掉网线，在引导联网页按 <kbd>Shift + F10</kbd> 打开命令行窗口输入下面命令自动重启，下一步按钮旁边会多一个 “没有英特网” 的选项。

```
OOBE\BYPASSNRO
```


## 屏蔽（延长）系统更新

1. <kbd>Win + R</kbd> 输入 “regedit” 打开注册表，依次打开 `\HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\WindowsUpdate\UX\Settings`。

2. 右键 > 新建 > DWORD（32位）值，命名为 `FlightSettingsMaxPauseDays`。

3. 基数改为十进制，数值为暂停的天数。




## 切换 Administrator 账户并删除其他用户

以管理员身份运行 cmd （菜单栏搜索框搜索cmd，右键）， 运行命令启用 Administrator 账户。

```
net user administrator /active:yes
```

然后在开始栏注销当前用户并登录 Administrator 用户，在 “控制中心 > 用户账户” 里删除其他账户。
