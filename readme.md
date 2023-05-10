# 腾讯云即时通信 IM APICloud Demo

## 概述

该 demo 为腾讯云即时通信 IM 在 APICloud 平台上发布的 tencentCloudChatSDK 模块和 tencentCloudChatH5 H5模块的简单demo。
该demo仅包含 tencentCloudChatH5 里各个 api 的使用方法。

**关于腾讯云即时通信**

腾讯云即时通信IM基于QQ底层IM能力开发，仅需植入SDK即可轻松集成聊天、会话、群组、资料管理和直播弹幕能力，也支持通过信令消息与白板等其他产品打通，全面覆盖您的业务场景，支持各大平台小程序接入使用，全面满足通信需要。 

**应用场景**

1，社交沟通：腾讯云即时通信 IM 为应用于社交沟通提供能力支持，可实现单聊、群聊、弹幕等多种聊天模式，支持文字、图片、语音、短视频等多种消息类型，实时消息推送满足消息到达率的要求，并可支持实时音视频通话，有效提升用户粘性与活跃度。

2，搭建直播间：腾讯云即时通信 IM 提供直播聊天室互动能力，聊天室无人数上限，支持亿级消息并发，轻松实现弹幕、 送礼和点赞等多消息类型，管理灵活，轻松打造良好的直播聊天互动体验。

3，搭建智能客服：腾讯云即时通信 IM 可满足商家与用户多场景沟通的需要，为客户提供专属客服服务，提升服务效率，与智能机器人相结合，可有效降低人力成本，沉淀客户价值。

4，系统消息通知：腾讯云即时通信 IM 提供在线推送与离线推送服务，让系统消息精准到达。

了解更多应用场景可查看[腾讯云即时通信IM产品应用场景](https://cloud.tencent.com/document/product/269/32579?fromSource=gwzcw.7148376.7148376.7148376&utm_medium=cpc&utm_id=gwzcw.7148376.7148376.7148376)

了解更多腾讯云IM相关内容以及体验demo请到[腾讯云即时通信IM产品页](https://cloud.tencent.com/product/im?fromSource=gwzcw.7148376.7148376.7148376&utm_medium=cpc&utm_id=gwzcw.7148376.7148376.7148376)。

<a id = "register"></a>

## 注册和购买
**注册**

您可以在这里注册腾讯云账号，详情参见[注册腾讯云](https://cloud.tencent.com/document/product/378/17985?fromSource=gwzcw.7148376.7148376.7148376&utm_medium=cpc&utm_id=gwzcw.7148376.7148376.7148376)教程。

**免费体验**

前往[腾讯云免费体验馆](https://cloud.tencent.com/act/pro/free_person?fromSource=gwzcw.7148376.7148376.7148376&utm_medium=cpc&utm_id=gwzcw.7148376.7148376.7148376)，搜索【即时通信IM】即可免费体验

**最新活动**

腾讯云即时通信IM产品最新活动，首单低至0.9折起，[立即选购](https://cloud.tencent.com/act/pro/imnew?fromSource=gwzcw.7148376.7148376.7148376&utm_medium=cpc&utm_id=gwzcw.7148376.7148376.7148376)

**了解更多购买信息**

了解腾讯云即时通信IM定价请参考[腾讯云即时通信IM产品定价](https://cloud.tencent.com/document/product/269/81908?fromSource=gwzcw.7148376.7148376.7148376&utm_medium=cpc&utm_id=gwzcw.7148376.7148376.7148376)

了解腾讯云即时通信IM更多购买指南请参考[腾讯云即时通信IM产品购买指南](https://cloud.tencent.com/document/product/269/11673?fromSource=gwzcw.7148376.7148376.7148376&utm_medium=cpc&utm_id=gwzcw.7148376.7148376.7148376)

## 前提条件

1. 您已 [注册腾讯云](https://cloud.tencent.com/document/product/378/17985) 帐号，并完成 [实名认证](https://cloud.tencent.com/document/product/378/3629)。
2. 登录 [即时通信 IM 控制台](https://console.cloud.tencent.com/im)。
>?如果您已有应用，请记录其 SDKAppID 并 [获取密钥信息](#step2)。
>同一个腾讯云帐号，最多可创建300个即时通信 IM 应用。若已有300个应用，您可以先 [停用并删除](https://intl.cloud.tencent.com/document/product/1047/34540) 无需使用的应用后再创建新的应用。**应用删除后，该 SDKAppID 对应的所有数据和服务不可恢复，请谨慎操作。**
3. 单击**创建新应用**，在**创建应用**对话框中输入您的应用名称，单击**确定**。
![](https://main.qcloudimg.com/raw/15e61a874a0640d517eeb67e922a14bc.png)
4. 请保存 SDKAppID 信息。可在控制台总览页查看新建应用的状态、业务版本、SDKAppID、标签、创建时间以及到期时间。
5. 单击创建后的应用，左侧导航栏单击**辅助工具**>**UserSig 生成&校验**，创建一个 UserID 及其对应的 UserSig，复制签名信息，后续登录使用。
![](https://main.qcloudimg.com/raw/2286644d987d24caf565142ae30c4392.png)
6. 通过 SDKAppID 先调用 **initSDK** （初始化SDK）接口。

## 引入模块
1. 在您的项目中引入`tencentCloudChatSDK`模块。
   ![](https://qcloudimg.tencent-cloud.cn/raw/8adb7906308852b00ba6cfbf19a99a5c.png)
2. 在您的项目中引入`tencentCloudChatH5`模块。
   - 控制台 > 点击您的项目 > 模块 > 模块库 > 搜索tencentCloudChatH5并加入到您的项目中
  > `tencentCloudChatSDK`模块 为纯js模块，为了更方便的使用`tencentCloudChatSDK`模块，推荐您与`tencentCloudChatH5`模块结合使用。
  > `tencentCloudChatH5`模块 定义了各接口的出入参类型，能够更直观方便简洁的调用`tencentCloudChatSDK`模块 里的接口。
3. 下载本模块，将`tencentCloudChatH5.js`添加到您的项目中。
    ![](https://qcloudimg.tencent-cloud.cn/raw/07d5d3fffdad59ffa8bc03fc3aff1e5b.png)
    ```html
    <!-- 请根据您项目中的具体路径修改src的文件路径 -->
     <script type="text/javascript" src="./tencentCloudChat.js"></script>
    ```
4. 引入成功后，可以在您的代码中使用 `tencentCloudChat` 类。示例代码如下：
   首先需要对H5模块进行初始化
    ```js
    // 需要在引用H5的每个页面进行初始化
    tencentCloudChat.initTencentCloudChat(api.require('tencentCloudChatSDK'))
    ```
    在调用接口之前，必须首先要调用初始化接口进行初始化。
    接口初始化需要<a href = "#perquisite">前提条件</a>的sdkAppID。
    ```js
    //接口初始化在整个项目只需初始化一次，请不要重复初始化
    let data = await tencentCloudChat.initSDK(
        {sdkAppID:}
    );
    ```

## 使用
1. 下载该demo，并用API Studio打开。
2. 将 `config.xml` 中的 widget id 更换为自己的应用id。
3. 将代码中的初始化接口、登录接口等接口的参数修改为自己的数据后即可运行。

## 相关内容
[腾讯云IM 官网](https://cloud.tencent.com/document/product/269/86557)
[tencentCloudChatSDK](https://www.apicloud.com/mod_detail/149186)
[tencentCloudChatH5](https://www.apicloud.com/mod_detail/149201)

## 开发群
<img src="https://qcloudimg.tencent-cloud.cn/raw/f348789d03975dc153a6203b8744f335.jpg" width="50%"></img>