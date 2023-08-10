# 腾讯云即时通信 IM

## 模块使用
需要先添加`tencentCloudChatSDK`模块。

## 目录
|目录|
|--|
|<a href = "#introduction">概述</a>|
|<a href = "#register">注册和购买</a>|
|<a href = "#demo">demo 体验</a>|
|<a href = "#perquisite">云配置申请</a>|
|<a href = "#start">快速入门</a>|
|<a href = "#interface">接口列表</a>|

<a id = "introduction"></a>

## 概述

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


<a id = "demo"></a>

## demo 体验
开始接入前，您可以体验我们的 Demo， 快速了解腾讯云 IM SDK。
IM Demo包含完整的聊天功能，代码已开源，如果您需要实现聊天类似场景，可以使用 Demo进行二次开发。可[立即体验 Demo](https://cloud.tencent.com/document/product/269/36852)。
我们还提供了针对于 APICloud平台的简单的demo。该 demo 无UI，为 tencentCloudChatH5 模块里的API 的示例代码,在继续完善中。可[立即下载](https://github.com/TencentCloud/chat-demo-apicloud)

## 联系我们
如有任何问题，可以通过 <a href = '#qrcode'>二维码</a> 添加我们的开发群。

<a id = "perquisite"></a>

## 云配置申请
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
<a id = "start"></a>

## 快速入门
快速入门将展示如何使用IM最基本收发消息的功能。

### 初始化
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
若返回的code为0，则表示初始化成功。
### 登录
初始化成功后，需要先登录才能继续使用收发消息接口、进入群聊、获取消息列表等功能。登录需要初始化的sdkAppID下的UserID和userSig。获取userSig请参考<a href = "#perquisite">前提条件</a>。

```js
let data = await tencentCloudChat.login({
    userID: "",
    userSig: "",
});
```
若返回的code为0，则表示登录成功。

### 发送消息
下面示例代码为发送简单文本消息，可通过高级消息监听器监听消息。您还可以发送音视频、图片、文件、地理位置等消息。
```js
//创建消息
let data = await tencentCloudChat.createTextMessage({
    text:"add"
});

//发送消息
let data = await tencentCloudChat.sendMessage({
    id:,
    receiver:""
});

```
返回code为0则表示发送消息成功。
>如果发送失败，可能是由于您的 sdkAppID 不支持陌生人发送消息，您可至控制台开启，用于测试。请点击此链接，关闭好友关系链检查。

### 收取消息
下面示例代码使用高级消息监听器监听消息。
```js
let listener = new advancedMsgListener({
    onRecvNewMessage:function(data){console.log(JSON.stringify(data))}
})
await tencentCloudChat.addAdvancedMsgListener(listener);
```
若发送消息成功，可以在另一台设备上收到新的消息。

如上，已经完成了即时通信IM的基本收发消息功能。下面提供详细的 API 文档，可以为您的应用添加群聊、好友关系链等更多的功能。

## 模块说明
### 参数类型
本模块的出入参参数类型在 `params` 里。在调用api时会自动检查参数类型，在调用后返回时同时会返回返回值的参数类型。以`setSelfInfo`接口为例：
```js
setSelfInfo:{ //key 为 api名
        param:{ //param为入参参数
            nickName:{ //参数名
                type:"string", // 类型，包含string,number,object等
                required:false,//是否为必填。true-必填，false-选填
                default:null // 当参数为选填时，若用户不填则会自动填入的值。比如若不填nickname则会传入{nickname:null}
            },
            ...
            gender:{
                type:"number",
                required:false,
                default:null,
                option:{    // 可选值，相当于enum。必须填入option里的值。值-说明
                    0:"unknown",
                    1:"male",
                    2:"female"
                }
            },
            ...
            customInfo:{
                type:"object", // object指map类型的数据{string:string}
                required:false,
                default:{}
            },
        },
        response:{ //response为返回值中data的参数类型
            data:{
                type:"Array", //列表
                arrayType:V2TIMUserFullInfo, // 列表元素类型，相当于typeof array[0]。当type为“Array”时有效
                desc:"" // 字段说明
            }
        }
    },
```

### api返回
本模块的返回由`Promise`返回。用户可以通过`resolve`或`reject`判断api是否调用成功。
#### 调用成功
当api调用成功时（即code为0），同时会返回data的类型。返回值如下：
```js
{
    type:{ // 返回值中data的类型。即在现在的返回值中为data.data的类型。与params里response.type的内容相同
        type: // 返回值类型
        desc: // 返回值说明
    },
    data:{ // 返回值。内容与tencentCloudChatSDK的返回值相同
        code: // 返回的code。code为0为调用成功
        data: // 返回数据
        desc:
    }
}
```
#### 调用失败
##### 入参检查未通过
每次在api调用时都会检查入参参数类型。若参数类型检查失败则会直接reject错误提醒。
```js
// 在调用initSDK时当入参中没有传必填参数sdkAppID时的报错
{
    error:"sdkAppID is required", //错误信息
    required: ["sdkAppID"],     //必填参数列表
    param:{                     // initSDK的参数列表，相当于params.initSDK.param
        sdkAppID:{
                type: "number",
                required: true,
                desc:"",
            },
            logLevel: {
                type:"number",
                required:false,
                option:{
                    0:"none",
                    3:"debug",
                    4:"info",
                    5:"warn",
                    6:"error"

                },
                default:0,
            },
            uuid:{
                type:"string",
                required:false,
                default:"uuid"
            }
    }
}
```
##### api调用失败
调用失败会通过`reject`返回错误码和错误说明。返回值与原模块相同。
```js
//失败时的返回值
{
    code:
    desc:
}
```

### 监听器 listener
本H5模块使得设置监听器更加的直观，需要填入回调函数作为参数，不再需要填入UUID进行设置。
模块的监听器与`tencentCloudChatSDK`的监听器相同，共有一下几种监听器：
1. <a href= "#IMSDKListener">IMSDKListener</a> : IM监听器，如服务器是否连接成功
2. <a href = "#advancedMsgListener">advancedMsgListener</a> : 高级消息监听器，如收到新的消息
3. <a href="#groupListener">groupListener</a> : 群组监听器，如有用户加入群
4. <a href = "#conversationListener">conversationListener</a> : 会话监听器，如会话未读计数变更通知
5. <a href = "#friendshipListener">friendshipListener</a> : 好友监听器，如好友申请通知
6. <a href = "#signalingListener">signalingListener</a> : 信令监听器，如收到邀请

> 每个监听器支持多注册/注销。

<a id = "IMSDKListener"></a>

#### IMSDKListener
##### 示例代码
```js
let listener = new sdkListener({
    onConnecting:function(data){console.log(data)}
})
//添加IM监听
await tencentCloudChat.addIMSDKListener(listener)
//删除IM监听
let data = await tencentCloudChat.removeIMSDKListener(listener)

```
##### 参数
```js
let listener = new sdkListener({
    onConnecting:function(data){}, // SDK 正在连接到腾讯云服务器
    onConnectSuccess:function(data){}, //SDK 已经成功连接到腾讯云服务器
    onConnectFailed:function(data){}, //SDK 连接腾讯云服务器失败
    onKickedOffline:function(data){}, // 当前用户被踢下线，此时可以 UI 提示用户，并再次调用 V2TIMManager 的 login() 函数重新登录。
    onUserSigExpired:function(data){}, // 在线时票据过期：此时您需要生成新的 userSig 并再次调用 V2TIMManager 的 login() 函数重新登录。
    onSelfInfoUpdated:function(data){}, //登录用户的资料发生了更新
    onUserStatusChanged:function(data){}, //用户状态变更通知
})
```

##### 返回值
返回值具体可见 <a href = "#V2TIMSDKListener">V2TIMSDKListener</a>

<a id = "advancedMsgListener"></a>

#### advancedMsgListener

##### 示例代码
```js
let listener = new advancedMsgListener({
    onRecvNewMessage:function(data){console.log(JSON.stringify(data))}
})
// 添加高级消息监听
await tencentCloudChat.addAdvancedMsgListener(listener);
//删除高级消息监听
await tencentCloudChat.removeAdvancedMsgListener(listener);
```
##### 参数
```js
let listener = new advancedMsgListener({
    onRecvNewMessage:function(data){}, // 收到新消息
    onRecvMessageReadReceipts:function(data){}, //消息已读回执通知（如果自己发送的消息支持已读回执，消息接收端调用 sendMessageReadReceipts，自己会收到该通知）
    onRecvC2CReadReceipt:function(data){}, //C2C 对端用户会话已读通知（如果对端用户调用 markC2CMessageAsRead 接口，自己会收到该回调，回调只会携带对端 userID 和对端已读 timestamp 信息）
    onRecvMessageRevoked:function(data){}, //收到消息撤回的通知
    onRecvMessageModified:function(data){},//消息内容被修改
    onRecvMessageExtensionsChanged:function(data){},//消息扩展信息更新
    onRecvMessageExtensionsDeleted:function(data){},//消息扩展信息被删除
})
```
##### 返回值
具体可见 <a href = "#V2TIMAdvancedMsgListener">V2TIMAdvancedMsgListener</a>

<a id = "groupListener"></a>

#### groupListener
##### 示例代码
```js
let listener = new groupListener({
    onMemberEnter:function(data){console.log(JSON.stringify(data))}
})
//添加群组监听
await tencentCloudChat.addGroupListener(listener)
//删除群组监听
await tencentCloudChat.removeGroupListener(listener)
```

##### 参数
```js
let listener = new groupListener({
    onMemberEnter:function(data){}, //有用户加入群（全员能够收到） 会议群（Meeting）默认无此回调，如需回调，请前往 控制台 (功能配置 -> 群组配置 -> 群系统通知配置 -> 群成员变更通知) 主动配置。
    onMemberLeave:function(data){}, //有用户离开群（全员能够收到） 会议群（Meeting）默认无此回调，如需回调，请前往 控制台 (功能配置 -> 群组配置 -> 群系统通知配置 -> 群成员变更通知) 主动配置
    onMemberInvited:function(data){}, //某些人被拉入某群（全员能够收到）
    onMemberKicked:function(data){}, //某些人被踢出某群（全员能够收到）
    onMemberInfoChanged:function(data){}, //群成员信息被修改，仅支持禁言通知（全员能收到）。
    onGroupCreated:function(data){}, //创建群（主要用于多端同步）
    onGroupDismissed:function(data){}, //群被解散了（全员能收到）
    onGroupRecycled:function(data){}, //群被回收（全员能收到）
    onGroupInfoChanged:function(data){}, //群信息被修改（全员能收到） 以下字段的修改可能会引发该通知 groupName & introduction & notification & faceUrl & owner & allMute & custom 控制指定字段 下发通知/存漫游 请前往 控制台 (功能配置 -> 群组配置 -> 群系统通知配置 -> 群资料变更通知) 主动配置。
    onReceiveJoinApplication:function(data){}, //有新的加群请求（只有群主或管理员会收到）
    onApplicationProcessed:function(data){}, //加群请求已经被群主或管理员处理了（只有申请人能够收到）
    onGrantAdministrator:function(data){}, //指定管理员身份
    onRevokeAdministrator:function(data){}, //取消管理员身份
    onQuitFromGroup:function(data){}, //主动退出群组（主要用于多端同步，直播群（AVChatRoom）不支持）
    onReceiveRESTCustomData:function(data){}, //收到 RESTAPI 下发的自定义系统消息
    onGroupAttributeChanged:function(data){}, //收到群属性更新的回调
    onTopicCreated:function(data){}, //话题创建
    onTopicDeleted:function(data){}, //话题被删除
    onTopicInfoChanged:function(data){}, //话题更新
    onGroupCounterChanged:function(data){}, //某个已加入的群的计数器被修改了，会返回当前变更的群计数器（该群所有的成员都能收到）
})
```
##### 返回值
具体可见 <a href = "#V2TIMGroupListener">V2TIMGroupListener</a>
<a id = "conversationListener"></a>

#### conversationListener
##### 示例代码
```js
let listener = new conversationListener({
    onSyncServerStart:function(data){console.log(JSON.stringify(data))}
})
//添加会话监听
await tencentCloudChat.addConversationListener(listener)
//删除会话监听
await tencentCloudChat.removeConversationListener(listener)
```
##### 参数
```js
let listener = new conversationListener({
    onSyncServerStart:function(data){}, //同步服务器会话开始，SDK 会在登录成功或者断网重连后自动同步服务器会话，您可以监听这个事件做一些 UI 进度展示操作。
    onSyncServerFinish:function(data){}, //同步服务器会话完成，如果会话有变更，会通过 onNewConversation | onConversationChanged 回调告知客户
    onSyncServerFailed:function(data){}, //同步服务器会话失败
    onNewConversation:function(data){}, //有新的会话（比如收到一个新同事发来的单聊消息、或者被拉入了一个新的群组中），可以根据会话的 lastMessage -> timestamp 重新对会话列表做排序
    onConversationChanged:function(data){}, //某些会话的关键信息发生变化（未读计数发生变化、最后一条消息被更新等等），可以根据会话的 lastMessage -> timestamp 重新对会话列表做排序
    onTotalUnreadMessageCountChanged:function(data){}, //全部会话未读总数变更的通知
    onUnreadMessageCountChangedByFilter:function(data){}, //根据 filter 过滤的未读消息总数变更通知（7.0 及以上版本支持）
    onConversationGroupCreated:function(data){}, //会话分组被创建
    onConversationGroupDeleted:function(data){}, //会话分组被删除
    onConversationGroupNameChanged:function(data){}, //会话分组名变更
    onConversationsAddedToGroup:function(data){}, //会话分组新增会话
    onConversationsDeletedFromGroup:function(data){}, //会话分组删除会话
})
```
##### 返回值
具体可见 <a href = "#V2TIMConversationListener">V2TIMConversationListener</a>

<a id = "friendshipListener"></a>

#### friendshipListener
##### 示例代码
```js
let listener = new friendshipListener({
    onFriendApplicationListAdded:function(data){console.log(JSON.stringify(data))}
})
//添加好友监听
await tencentCloudChat.addFriendListener(listener)
//删除好友监听
await tencentCloudChat.removeFriendListener(listener)
```
##### 参数
```js
let listener = new friendshipListener({
    onFriendApplicationListAdded:function(data){}, //好友申请新增通知
    onFriendApplicationListDeleted:function(data){}, //好友申请删除通知
    onFriendApplicationListRead:function(data){}, //好友申请已读通知
    onFriendListAdded:function(data){}, //好友新增通知
    onFriendListDeleted:function(data){}, //好友删除通知
    onBlackListAdd:function(data){}, //黑名单新增通知
    onBlackListDeleted:function(data){}, //黑名单删除通知
    onFriendInfoChanged:function(data){}, //好友资料更新通知
})
```
##### 返回值
具体可见 <a href = "#V2TIMFriendshipListener">V2TIMFriendshipListener</a>

<a id = "signalingListener"></a>

#### signalingListener
##### 示例代码
```js
let listener = new signalingListener({
    onReceiveNewInvitation:function(data){console.log(JSON.stringify(data))}
})
//添加好友监听
await tencentCloudChat.addSignalingListener(listener)
//删除好友监听
await tencentCloudChat.removeSignalingListener(listener)
```
##### 参数
```js
let listener = new signalingListener({
    onReceiveNewInvitation:function(data){}, //收到邀请
    onInviteeAccepted:function(data){}, //被邀请者接受邀请
    onInviteeRejected:function(data){}, //被邀请者拒绝邀请
    onInvitationCancelled:function(data){}, //邀请被取消
    onInvitationTimeout:function(data){}, //邀请超时
    onInvitationModified:function(data){}, //邀请被修改（6.7 及其以上版本支持）
})
```
##### 返回值
具体可见 <a href ="#V2TIMSignalingListener">V2TIMSignalingListener</a>

<a id = "interface"></a>

## 接口列表
### V2TIMManager
|接口名|功能|接口名|功能|接口名|功能|
|---|---|---|---|---|---|
|<a href = "#initSDK">initSDK</a>|初始化 SDK|<a href = "#unInitSDK">unInitSDK</a>|反初始化 SDK|<a href = "#getVersion">getVersion</a>|获取 SDK 版本|
|<a href = "#getServerTime">getServerTime</a>|获取服务器当前时间|<a href = "#login">login</a>|登录|<a href = "#logout">logout</a>|登出|
|<a href = "#getLoginUser">getLoginUser</a>|获取登录用户|<a href = "#getLoginStatus">getLoginStatus</a>|获取登录状态|<a href = "#addIMSDKListener">addIMSDKListener</a>|添加IM监听|
|<a href = "#removeIMSDKListener">removeIMSDKListener</a>|移除IM监听|<a href = "#addGroupListener">addGroupListener</a>|添加群组监听器|<a href = "#removeGroupListener">removeGroupListener</a>|移除群组监听器|
|<a href = "#createGroup">createGroup</a>|创建群组|<a href = "#joinGroup">joinGroup</a>|加入群组|
|<a href = "#quitGroup">quitGroup</a>|退出群组|<a href = "#dismissGroup">dismissGroup</a>|解散群组|<a href = "#getUsersInfo">getUsersInfo</a>|获取用户资料|
|<a href = "#getUserStatus">getUserStatus</a>|查询用户状态|<a href = "#setSelfInfo">setSelfInfo</a>|修改个人资料|<a href = "#setSelfStatus">setSelfStatus</a>|设置自己的状态|
|<a href = "#subscribeUserStatus">subscribeUserStatus</a>|订阅用户状态|<a href = "#unsubscribeUserStatus">unsubscribeUserStatus</a>|取消订阅用户状态|||

### V2TIMMessageManager
|接口名|功能|接口名|功能|接口名|功能|
|---|---|---|---|---|---|
|<a href = "#addAdvancedMsgListener">addAdvancedMsgListener</a>|添加高级消息的事件监听器|<a href = "#removeAdvancedMsgListener">removeAdvancedMsgListener</a>|移除高级消息的事件监听器|<a href = "#createTextMessage">createTextMessage</a>|创建文本消息|
|<a href = "#createTextAtMessage">createTextAtMessage</a>|附带 @ 提醒功能|<a href = "#createCustomMessage">createCustomMessage</a>|创建自定义消息|<a href = "#createImageMessage">createImageMessage</a>|创建图片消息|
|<a href = "#createSoundMessage">createSoundMessage</a>|创建语音消息|<a href = "#createVideoMessage">createVideoMessage</a>|创建视频消息|<a href = "#createFileMessage">createFileMessage</a>|创建文件消息|
|<a href = "#createLocationMessage">createLocationMessage</a>|创建地理位置消息|<a href = "#createFaceMessage">createFaceMessage</a>|创建表情消息|<a href = "#createMergerMessage">createMergerMessage</a>|创建合并消息|
|<a href = "#createForwardMessage">createForwardMessage</a>|创建转发消息|<a href = "#createTargetedGroupMessage">createTargetedGroupMessage</a>|创建定向群消息|<a href = "#sendMessage">sendMessage</a>|发送高级消息|
|<a href = "#setC2CReceiveMessageOpt">setC2CReceiveMessageOpt</a>|设置针对某个用户的 C2C 消息接收选项|<a href = "#getC2CReceiveMessageOpt">getC2CReceiveMessageOpt</a>|查询针对某个用户的 C2C 消息接收选项|<a href = "#setGroupReceiveMessageOpt">setGroupReceiveMessageOpt</a>|设置群消息的接收选项|
|<a href = "#getC2CHistoryMessageList">getC2CHistoryMessageList</a>|获取单聊历史消息|<a href = "#getGroupHistoryMessageList">getGroupHistoryMessageList</a>|获取群组历史消息|<a href = "#getHistoryMessageList">getHistoryMessageList</a>|获取历史消息高级接口|
|<a href = "#revokeMessage">revokeMessage</a>|撤回消息|<a href = "#modifyMessage">modifyMessage</a>|消息变更|<a href = "#markC2CMessageAsRead">markC2CMessageAsRead</a>|标记单聊会话已读|
|<a href = "#markGroupMessageAsRead">markGroupMessageAsRead</a>|标记群组会话已读|<a href = "#markAllMessageAsRead">markAllMessageAsRead</a>|标记所有会话为已读|<a href = "#deleteMessageFromLocalStorage">deleteMessageFromLocalStorage</a>|删除本地消息|
|<a href = "#clearC2CHistoryMessage">clearC2CHistoryMessage</a>|清空单聊本地及云端的消息|<a href = "#clearGroupHistoryMessage">clearGroupHistoryMessage</a>|清空群聊本地及云端的消息|<a href = "#insertGroupMessageToLocalStorage">insertGroupMessageToLocalStorage</a>|向群组消息列表中添加一条消息|
|<a href = "#insertC2CMessageToLocalStorage">insertC2CMessageToLocalStorage</a>|向C2C消息列表中添加一条消息|<a href = "#findMessages">findMessages</a>|查询指定会话中的本地消息|<a href = "#searchLocalMessages">searchLocalMessages</a>|搜索本地消息|
|<a href = "#sendMessageReadReceipts">sendMessageReadReceipts</a>|发送消息已读回执|<a href = "#getMessageReadReceipts">getMessageReadReceipts</a>|获取消息已读回执|<a href = "#getGroupMessageReadMemberList">getGroupMessageReadMemberList</a>|获取群消息已读群成员列表|
|<a href = "#setMessageExtensions">setMessageExtensions</a>|设置消息扩展|<a href = "#getMessageExtensions">getMessageExtensions</a>|获取消息扩展|<a href = "#deleteMessageExtensions">deleteMessageExtensions</a>|删除消息扩展|
|<a href = "#downloadMessage">downloadMessage</a>|下载消息|<a href = "#getMessageOnlineUrl">getMessageOnlineUrl</a>|获取消息下载地址|<a href = "#downloadMergerMessage">downloadMergerMessage</a>|下载合并消息|

### V2TIMGroupManager
|接口名|功能|接口名|功能|接口名|功能|
|---|---|---|---|---|---|
|<a href = "#getJoinedGroupList">getJoinedGroupList</a>|获取当前用户已经加入的群列表|<a href = "#getGroupsInfo">getGroupsInfo</a>|拉取群资料|<a href = "#searchGroups">searchGroups</a>|搜索群资料|
|<a href = "#setGroupInfo">setGroupInfo</a>|修改群资料|<a href = "#initGroupAttributes">initGroupAttributes</a>|初始化群属性|<a href = "#setGroupAttributes">setGroupAttributes</a>|设置群属性|
|<a href = "#deleteGroupAttributes">deleteGroupAttributes</a>|删除指定群属性|<a href = "#getGroupAttributes">getGroupAttributes</a>|获取指定群属性|<a href = "#getGroupOnlineMemberCount">getGroupOnlineMemberCount</a>|获取指定群在线人数|
|<a href = "#getGroupMemberList">getGroupMemberList</a>|获取群成员列表|<a href = "#getGroupMembersInfo">getGroupMembersInfo</a>|获取指定的群成员资料|<a href = "#searchGroupMembers">searchGroupMembers</a>|搜索群成员|
|<a href = "#setGroupMemberInfo">setGroupMemberInfo</a>|修改指定的群成员资料|<a href = "#muteGroupMember">muteGroupMember</a>|禁言|<a href = "#inviteUserToGroup">inviteUserToGroup</a>|邀请他人入群|
|<a href = "#kickGroupMember">kickGroupMember</a>|踢人|<a href = "#setGroupMemberRole">setGroupMemberRole</a>|切换群成员的角色。|<a href = "#markGroupMemberList">markGroupMemberList</a>|标记群成员|
|<a href = "#transferGroupOwner">transferGroupOwner</a>|转让群主|<a href = "#getGroupApplicationList">getGroupApplicationList</a>|获取加群申请列表|<a href = "#acceptGroupApplication">acceptGroupApplication</a>|同意某一条加群申请|
|<a href = "#refuseGroupApplication">refuseGroupApplication</a>|拒绝某一条加群申请|<a href = "#setGroupApplicationRead">setGroupApplicationRead</a>|标记申请列表为已读|<a href = "#getJoinedCommunityList">getJoinedCommunityList</a>|获取当前用户已经加入的支持话题的社群列表|
|<a href = "#createTopicInCommunity">createTopicInCommunity</a>|创建话题|<a href = "#deleteTopicFromCommunity">deleteTopicFromCommunity</a>|删除话题|<a href = "#setTopicInfo">setTopicInfo</a>|修改话题信息|
|<a href = "#getTopicInfoList">getTopicInfoList</a>|获取话题列表|

### V2TIMSignalingManager
|接口名|功能|接口名|功能|接口名|功能|
|---|---|---|---|---|---|
|<a href = "#addSignalingListener">addSignalingListener</a>|添加信令监听|<a href = "#removeSignalingListener">removeSignalingListener</a>|移除信令监听|<a href = "#invite">invite</a>|邀请某个人|
|<a href = "#inviteInGroup">inviteInGroup</a>|邀请群内的某些人|<a href = "#cancel">cancel</a>|邀请方取消邀请|<a href = "#accept">accept</a>|接收方接收邀请|
|<a href = "#reject">reject</a>|接收方拒绝邀请|<a href = "#getSignalingInfo">getSignalingInfo</a>|获取信令信息|<a href = "#addInvitedSignaling">addInvitedSignaling</a>|添加邀请信令|

### V2TIMConversationManager
|接口名|功能|接口名|功能|接口名|功能|
|---|---|---|---|---|---|
|<a href = "#addConversationListener">addConversationListener</a>|添加会话监听器|<a href = "#removeConversationListener">removeConversationListener</a>|移除会话监听器|<a href = "#getConversationList">getConversationList</a>|获取会话列表|
|<a href = "#getConversationListByConversationIds">getConversationListByConversationIds</a>|获取会话列表|<a href = "#getConversation">getConversation</a>|获取单个会话|<a href = "#getConversationListByFilter">getConversationListByFilter</a>|获取会话列表高级接口|
|<a href = "#deleteConversation">deleteConversation</a>|删除会话|<a href = "#setConversationDraft">setConversationDraft</a>|设置会话草稿|<a href = "#setConversationCustomData">setConversationCustomData</a>|设置会话自定义数据|
|<a href = "#pinConversation">pinConversation</a>|设置会话置顶|<a href = "#markConversation">markConversation</a>|标记会话|<a href = "#getTotalUnreadMessageCount">getTotalUnreadMessageCount</a>|获取会话未读总数|
|<a href = "#createConversationGroup">createConversationGroup</a>|创建会话分组|<a href = "#getConversationGroupList">getConversationGroupList</a>|获取会话分组列表|<a href = "#deleteConversationGroup">deleteConversationGroup</a>|删除会话分组|
|<a href = "#renameConversationGroup">renameConversationGroup</a>|重命名会话分组|<a href = "#addConversationsToGroup">addConversationsToGroup</a>|添加会话到一个会话分组|<a href = "#deleteConversationsFromGroup">deleteConversationsFromGroup</a>|从一个会话分组中删除会话|

### V2TIMFriendshipManager
|接口名|功能|接口名|功能|接口名|功能|
|---|---|---|---|---|---|
|<a href = "#addFriendListener">addFriendListener</a>|添加关系链监听器|<a href = "#removeFriendListener">removeFriendListener</a>|移除关系链监听器|<a href = "#getFriendList">getFriendList</a>|获取好友列表|
|<a href = "#getFriendsInfo">getFriendsInfo</a>|获取指定好友资料|<a href = "#setFriendInfo">setFriendInfo</a>|设置指定好友资料|<a href = "#searchFriends">searchFriends</a>|搜索好友|
|<a href = "#addFriend">addFriend</a>|添加好友|<a href = "#deleteFromFriendList">deleteFromFriendList</a>|删除好友|<a href = "#checkFriend">checkFriend</a>|检查指定用户的好友关系|
|<a href = "#getFriendApplicationList">getFriendApplicationList</a>|获取好友申请列表|<a href = "#acceptFriendApplication">acceptFriendApplication</a>|同意好友申请|<a href = "#refuseFriendApplication">refuseFriendApplication</a>|拒绝好友申请|
|<a href = "#deleteFriendApplication">deleteFriendApplication</a>|删除好友申请|<a href = "#setFriendApplicationRead">setFriendApplicationRead</a>|设置好友申请已读|<a href = "#addToBlackList">addToBlackList</a>|设置好友申请已读|
|<a href = "#deleteFromBlackList">deleteFromBlackList</a>|把用户从黑名单中删除|<a href = "#getBlackList">getBlackList</a>|获取黑名单列表|<a href = "#createFriendGroup">createFriendGroup</a>|新建好友分组|
|<a href = "#getFriendGroups">getFriendGroups</a>|获取分组信息|<a href = "#deleteFriendGroup">deleteFriendGroup</a>|删除好友分组|<a href = "#renameFriendGroup">renameFriendGroup</a>|修改好友分组的名称|
|<a href = "#addFriendsToFriendGroup">addFriendsToFriendGroup</a>|添加好友到一个好友分组|<a href = "#deleteFriendsFromFriendGroup">deleteFriendsFromFriendGroup</a>|从好友分组中删除好友|

### V2TIMOfflinePushManager
|接口名|功能|接口名|功能|接口名|功能|
|---|---|---|---|---|---|
|<a href = "#setOfflinePushConfig">setOfflinePushConfig</a>|设置离线推送配置信息|<a href = "#doBackground">doBackground</a>|应用退后台时|<a href = "#doForeground">doForeground</a>|应用进前台时|

## 模块接口

### V2TIMManager

<a id = "initSDK"></a>

#### initSDK

初始化 SDK

> 在初始化SDK之前，需要对模块进行初始化
> ```js
>// 需要在引用H5的每个页面进行初始化
>tencentCloudChat.initTencentCloudChat(api.require('tencentCloudChatSDK'))
> ```

##### params

```js
({

    sdkAppID: //字符串类型，应用 ID，必填项，可以在[控制台](console.cloud.tencent.com)中获取
    logLevel: //选填，数字类型，设置写日志等级，参考[enum] V2TIM_Log
    uuid: // 选填，字符串类型，listener的uuid
})
```
参考：
<a href = "#V2TIM_Log">V2TIM_Log</a>

##### callback
```js
success:
// 只列出data里的字段
{
    code: // 返回的code。code为0为调用成功
    data: // 返回数据，布尔类型，true表示初始化成功
    desc:
}
error:
{
    code: //error code
    desc: //error description
}
```

##### 代码示例

```js
// 整个项目只需要初始化一次即可。请不要重复调用initSDK
let data = await tencentCloudChat.initSDK(
    {sdkAppID:}
);
```

<a id = "unInitSDK"></a>

#### unInitSDK

反初始化 SDK

##### params

无

##### callback

```js
success:
// 只列出data里的字段
{
    code: // 返回的code。code为0为调用成功
    data: // 返回数据
    desc:
}
error:
{
    code: //error code
    desc: //error description
}
```

##### 代码示例

```js
let data = await tencentCloudChat.unInitSDK({});
```

<a id = "addIMSDKListener"></a>

#### addIMSDKListener

添加IM监听
##### params
```js
//全部选填
let listener = new sdkListener({
    onConnecting:function(data){}, // SDK 正在连接到腾讯云服务器
    onConnectSuccess:function(data){}, //SDK 已经成功连接到腾讯云服务器
    onConnectFailed:function(data){}, //SDK 连接腾讯云服务器失败
    onKickedOffline:function(data){}, // 当前用户被踢下线，此时可以 UI 提示用户，并再次调用 V2TIMManager 的 login() 函数重新登录。
    onUserSigExpired:function(data){}, // 在线时票据过期：此时您需要生成新的 userSig 并再次调用 V2TIMManager 的 login() 函数重新登录。
    onSelfInfoUpdated:function(data){}, //登录用户的资料发生了更新
    onUserStatusChanged:function(data){}, //用户状态变更通知
})
```
##### callback
```js
success:
// 只列出data里的字段
{
    method:"sdkListener", 
    type:"",
    data:"",
    listenerUuid:
}

```

返回值请参考 <a href = "#listener">EventListener</a>的<a href = "#V2TIMSDKListener">V2TIMSDKListener</a>

##### 代码示例
```js
let listener = new sdkListener({
    onConnecting:function(data){console.log(data)}
})
//添加IM监听
await tencentCloudChat.addIMSDKListener(listener)
```

<a id = "removeIMSDKListener"></a>

#### removeIMSDKListener
删除IM监听
##### params
```js
//需要和 addIMSDKListener函数相同
let listener = new sdkListener({
    onConnecting:function(data){}, // SDK 正在连接到腾讯云服务器
    onConnectSuccess:function(data){}, //SDK 已经成功连接到腾讯云服务器
    onConnectFailed:function(data){}, //SDK 连接腾讯云服务器失败
    onKickedOffline:function(data){}, // 当前用户被踢下线，此时可以 UI 提示用户，并再次调用 V2TIMManager 的 login() 函数重新登录。
    onUserSigExpired:function(data){}, // 在线时票据过期：此时您需要生成新的 userSig 并再次调用 V2TIMManager 的 login() 函数重新登录。
    onSelfInfoUpdated:function(data){}, //登录用户的资料发生了更新
    onUserStatusChanged:function(data){}, //用户状态变更通知
})
```
##### callback
```js
success:
// 只列出data里的字段
{
    code: // 返回的code。code为0为调用成功
    data: // 返回数据
    desc:
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```
##### 代码示例
```js
let listener = new sdkListener({
    onConnecting:function(data){console.log(data)}
})
//添加IM监听
await tencentCloudChat.addIMSDKListener(listener)
//删除IM监听
let data = await tencentCloudChat.removeIMSDKListener(listener)
```

<a id = "getVersion"></a>

#### getVersion

获取 SDK 版本

##### params

无

##### callback

```js
success:
// 只列出data里的字段
{
    code: // 返回的code。code为0为调用成功
    data: // 返回数据 字符串，version
    desc:
}
error:
{
    code: //error code
    desc: //error description
}
```

##### 代码示例

```js
let data = await tencentCloudChat.getVersion({});
```

<a id = "getServerTime"></a>

#### getServerTime

获取服务器当前时间

##### params

无

##### callback

```js
success:
// 只列出data里的字段
{
    code: // 返回的code。code为0为调用成功
    data: // 返回数据 数字类型，服务器时间，单位 s
    desc:
}
error:
{
    code: //error code
    desc: //error description
}
```

##### 代码示例

```js
let data = await tencentCloudChat.getServerTime();
```

<a id = "login"></a>

#### login

登录

###### params

```js
{
    userID: //必填，字符串
    userSig: //必填，字符串
}
```

登录需要设置用户名 userID 和用户签名 userSig，userSig 生成请参考 [UserSig 后台 API](https://cloud.tencent.com/document/product/269/32688)。

##### callback

```js
success:
// 只列出data里的字段
{

    code: // 返回的code。code为0为调用成功
    data: // 返回数据
    desc:
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

##### 代码示例

```js
let data = await tencentCloudChat.login({
                userID: "",
                userSig: "",
            });
```

<a id = "logout"></a>

##### logout

登出

###### params

无

###### callback

```js
success:
// 只列出data里的字段
{

    code: // 返回的code。code为0为调用成功
    data: // 返回数据
    desc:
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

退出登录，如果切换账号，需要 logout 回调成功或者失败后才能再次 login，否则 login 可能会失败。

###### 代码示例

```js
let data = await tencentCloudChat.logout({});
```

<a id = "getLoginUser"></a>

#### getLoginUser

获取登录用户

##### params

无

##### callback

```js
success:
// 只列出data里的字段
{
    code: // 返回的code。code为0为调用成功
    data: // 返回数据 字符串，userID
    desc:
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

##### 代码示例

```js
let data = await tencentCloudChat.getLoginUser({});
```

<a id = "getLoginStatus"></a>

#### getLoginStatus

获取登录状态

##### params

无

##### callback

```js
success:
// 只列出data里的字段
{

    code: // 返回的code。code为0为调用成功
    data: // 返回数据 登录状态,请参考[enum], V2TIM_Status
    desc:
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

##### 代码示例

```js
let data = await tencentCloudChat.getLoginStatus({})
```

参考：
<a href = "#V2TIM_Status">登录状态</a>


<a id = "addGroupListener"></a>

#### addGroupListener

添加群组监听器

##### params
```js
let listener = new groupListener({
    onMemberEnter:function(data){}, //有用户加入群（全员能够收到） 会议群（Meeting）默认无此回调，如需回调，请前往 控制台 (功能配置 -> 群组配置 -> 群系统通知配置 -> 群成员变更通知) 主动配置。
    onMemberLeave:function(data){}, //有用户离开群（全员能够收到） 会议群（Meeting）默认无此回调，如需回调，请前往 控制台 (功能配置 -> 群组配置 -> 群系统通知配置 -> 群成员变更通知) 主动配置
    onMemberInvited:function(data){}, //某些人被拉入某群（全员能够收到）
    onMemberKicked:function(data){}, //某些人被踢出某群（全员能够收到）
    onMemberInfoChanged:function(data){}, //群成员信息被修改，仅支持禁言通知（全员能收到）。
    onGroupCreated:function(data){}, //创建群（主要用于多端同步）
    onGroupDismissed:function(data){}, //群被解散了（全员能收到）
    onGroupRecycled:function(data){}, //群被回收（全员能收到）
    onGroupInfoChanged:function(data){}, //群信息被修改（全员能收到） 以下字段的修改可能会引发该通知 groupName & introduction & notification & faceUrl & owner & allMute & custom 控制指定字段 下发通知/存漫游 请前往 控制台 (功能配置 -> 群组配置 -> 群系统通知配置 -> 群资料变更通知) 主动配置。
    onReceiveJoinApplication:function(data){}, //有新的加群请求（只有群主或管理员会收到）
    onApplicationProcessed:function(data){}, //加群请求已经被群主或管理员处理了（只有申请人能够收到）
    onGrantAdministrator:function(data){}, //指定管理员身份
    onRevokeAdministrator:function(data){}, //取消管理员身份
    onQuitFromGroup:function(data){}, //主动退出群组（主要用于多端同步，直播群（AVChatRoom）不支持）
    onReceiveRESTCustomData:function(data){}, //收到 RESTAPI 下发的自定义系统消息
    onGroupAttributeChanged:function(data){}, //收到群属性更新的回调
    onTopicCreated:function(data){}, //话题创建
    onTopicDeleted:function(data){}, //话题被删除
    onTopicInfoChanged:function(data){}, //话题更新
    onGroupCounterChanged:function(data){}, //某个已加入的群的计数器被修改了，会返回当前变更的群计数器（该群所有的成员都能收到）
})
```
##### callback

```js
success:
// 只列出data里的字段
{
    method:"groupListener", 
    type:"",
    data:"",
    listenerUuid:
}

```

返回值请参考 <a href = "#listener">EventListener</a>的<a href = "#V2TIMGroupListener">V2TIMGroupListener</a>
##### 代码示例

```js
let listener = new groupListener({
    onMemberEnter:function(data){console.log(JSON.stringify(data))}
})
//添加群组监听
await tencentCloudChat.addGroupListener(listener)
```

<a id = "removeGroupListener"></a>

#### removeGroupListener

移除群组监听器

##### params

与 `addGroupListener` 相同

##### callback

```js
success:
// 只列出data里的字段
// 只列出data里的字段
{
    code:0, 
    data:“”,
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

参考 <a href = "#listener">EventListener</a>的<a href = "#V2TIMGroupListener">V2TIMGroupListener</a>
##### 代码示例

```js
let listener = new groupListener({
    onMemberEnter:function(data){console.log(JSON.stringify(data))}
})
//添加群组监听
await tencentCloudChat.addGroupListener(listener)
//删除群组监听
await tencentCloudChat.removeGroupListener(listener)
```

<a id = "createGroup"></a>

#### createGroup

创建群组

##### params

```js
{
   groupType:, //字符串，V2TIM_GroupType
    groupID:,//字符串，
    groupName://字符串，不能为 null，最长30字节
    notification://选填，字符串，
    introduction://选填，字符串，
    faceURL://选填，字符串，
    addOpt: // 选填，数字,参考[enum] V2TIM_GroupAdd
    isAllMuted: //选填，布尔
    isSupportTopic: //选填，布尔
    memberListMap: //选填，[V2TIMCreateGroupMemberInfo]列表
}
```

> 自定义群组 ID 必须为可打印 ASCII 字符（0x20-0x7e），最长48个字节，且前缀不能为 @TGS（避免与默认分配的群组 ID 混淆）
参考：
<a href = "#V2TIM_GroupType">V2TIM_GroupType</a>
<a href = "#V2TIMGroupInfo">V2TIMGroupInfo</a>
<a href = "#V2TIM_GroupAdd">V2TIM_GroupAdd</a>
<a href = "#V2TIMCreateGroupMemberInfo">V2TIMCreateGroupMemberInfo</a>

##### callback

```js
success:
// 只列出data里的字段
// 只列出data里的字段
{
    code:0, 
    data:string,//groupID
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

##### 代码示例

```js
let data = await tencentCloudChat.createGroup({groupType:"Public",groupID:"",groupName:""})
```

<a id = "joinGroup"></a>

#### joinGroup

加入群组

##### params

```js
{
    message:,// 选填，字符串，入群消息
    groupID:string, //必填
}
```

##### callback

```js
success:
// 只列出data里的字段
// 只列出data里的字段
{
    code:0, 
    data:"",
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

##### 代码示例

```js
let data = await tencentCloudChat.joinGroup({message:"Public",groupID:""})
```

<a id = "quitGroup"></a>

#### quitGroup

退出群组

##### params

```js
{
    groupID:string, //必填
}
```

##### callback

```js
success:
// 只列出data里的字段
// 只列出data里的字段
{
    code:0, 
    data:"",
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

##### 代码示例

```js
let data = await tencentCloudChat.quitGroup({groupID:""})
```

<a id = "dismissGroup"></a>

#### dismissGroup

解散群组

##### params

```js
{
    groupID:string, //必填
}
```

##### callback

```js
success:
// 只列出data里的字段
{
    code:0, 
    data:"",
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

##### 代码示例

```js

let data = await tencentCloudChat.dismissGroup({groupID:""})
```

<a id = "getUsersInfo"></a>

#### getUsersInfo

获取用户资料

##### params

```js
{
    userIDList:string[], //必填
}
```

##### callback

```js
success:
// 只列出data里的字段
// 只列出data里的字段
{
    code:0, 
    data:, //V2TIMUserFullInfo[]
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

参考：
<a href = "#V2TIMUserFullInfo">V2TIMUserFullInfo</a>

##### 代码示例

```js

let data = await tencentCloudChat.getUsersInfo({userIDList:[""]});
```

<a id = "getUserStatus"></a>

#### getUserStatus

查询用户状态，从 6.3 版本开始支持

##### params

```
{
    userIDList:string[] //必填
}
```

##### callback

```js
success:
// 只列出data里的字段
// 只列出data里的字段
{
    code:0, 
    data:, //V2TIMUserStatus[]
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

参考：
<a href = "#V2TIMUserStatus">V2TIMUserStatus</a>

##### 代码示例

```js

let data = await tencentCloudChat.getUserStatus({userIDList:[""]});
```

<a id = "setSelfInfo"></a>

#### setSelfInfo

修改个人资料

##### params

```js
{
    nickName: //选填
    faceURL//选填
    selfSignature //选填
    gender //选填
    allowType //选填
    role //选填
    level //选填
    birthday //选填
    customInfo //选填
}
```

###### callback

```js
success:
// 只列出data里的字段
// 只列出data里的字段
{
    code:0, 
    data:,// V2TIMUserFullInfo[]
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

参考：
<a href = "#V2TIMUserFullInfo">V2TIMUserFullInfo</a>

##### 代码示例

```js

let data = await tencentCloudChat.setSelfInfo({"nickName":"nickname"});
```

<a id = "setSelfStatus"></a>

#### setSelfStatus

设置自己的状态，从 6.3 版本开始支持

##### params

```js
{
   status: //字符串
}
```

##### callback

```js
success:
// 只列出data里的字段
// 只列出data里的字段
{
    code:0, 
    data:"",
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

##### 代码示例

```js

let data = await tencentCloudChat.setSelfStatus({"status":"status"});
```

<a id = "subscribeUserStatus"></a>

#### subscribeUserStatus

订阅用户状态，从 6.3 版本开始支持

##### params

```js
{
    userIDList:string[] //必填
}
```

##### callback

```js
success:
// 只列出data里的字段
// 只列出data里的字段
{
    code:0, 
    data:"",
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

##### 代码示例

```js

let data = await tencentCloudChat.subscribeUserStatus({"userIDList":[""]});
```

<a id = "unsubscribeUserStatus"></a>

#### unsubscribeUserStatus

取消订阅用户状态，从 6.3 版本开始支持

##### params

```
{
    userIDList:string[]
}
```

##### callback

```js
success:
// 只列出data里的字段
// 只列出data里的字段
{
    code:0, 
    data:"",
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```
##### 代码示例

```js

let data = await tencentCloudChat.unsubscribeUserStatus({"userIDList":[""]});
```

### V2TIMMessageManager

<a id = "addAdvancedMsgListener"></a>

#### addAdvancedMsgListener

添加高级消息的事件监听器

##### params
```js
let listener = new advancedMsgListener({
    onRecvNewMessage:function(data){}, // 收到新消息
    onRecvMessageReadReceipts:function(data){}, //消息已读回执通知（如果自己发送的消息支持已读回执，消息接收端调用 sendMessageReadReceipts，自己会收到该通知）
    onRecvC2CReadReceipt:function(data){}, //C2C 对端用户会话已读通知（如果对端用户调用 markC2CMessageAsRead 接口，自己会收到该回调，回调只会携带对端 userID 和对端已读 timestamp 信息）
    onRecvMessageRevoked:function(data){}, //收到消息撤回的通知
    onRecvMessageModified:function(data){},//消息内容被修改
    onRecvMessageExtensionsChanged:function(data){},//消息扩展信息更新
    onRecvMessageExtensionsDeleted:function(data){},//消息扩展信息被删除
})
```

##### callback

```js
success:
// 只列出data里的字段
{
    method:"advancedMsgListener",
    type:"", 
    data:"",
    listenerUuid:"",
}
```

返回值请参考 <a href = "#listener">EventListener</a>的<a href = "#V2TIMAdvancedMsgListener">V2TIMAdvancedMsgListener</a>

##### 代码示例

```js
let listener = new advancedMsgListener({
    onRecvNewMessage:function(data){console.log(JSON.stringify(data))}
})
// 添加高级消息监听
await tencentCloudChat.addAdvancedMsgListener(listener);
```

<a id = "removeAdvancedMsgListener"></a>

#### removeAdvancedMsgListener

移除高级消息的事件监听器

##### params
```js
let listener = new advancedMsgListener({
    onRecvNewMessage:function(data){}, // 收到新消息
    onRecvMessageReadReceipts:function(data){}, //消息已读回执通知（如果自己发送的消息支持已读回执，消息接收端调用 sendMessageReadReceipts，自己会收到该通知）
    onRecvC2CReadReceipt:function(data){}, //C2C 对端用户会话已读通知（如果对端用户调用 markC2CMessageAsRead 接口，自己会收到该回调，回调只会携带对端 userID 和对端已读 timestamp 信息）
    onRecvMessageRevoked:function(data){}, //收到消息撤回的通知
    onRecvMessageModified:function(data){},//消息内容被修改
    onRecvMessageExtensionsChanged:function(data){},//消息扩展信息更新
    onRecvMessageExtensionsDeleted:function(data){},//消息扩展信息被删除
})
```

##### callback

```js
success:
// 只列出data里的字段
{
    code:0, 
    data:"",
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

##### 代码示例

```js
let listener = new advancedMsgListener({
    onRecvNewMessage:function(data){console.log(JSON.stringify(data))}
})
// 添加高级消息监听
await tencentCloudChat.addAdvancedMsgListener(listener);
//删除高级消息监听
await tencentCloudChat.removeAdvancedMsgListener(listener);
```

<a id = "createTextMessage"></a>

#### createTextMessage

2.1 创建文本消息

##### params

```js
{
    text:string
}
```

##### callback

```js
success:
// 只列出data里的字段
{
    code:0, 
    data:{
        id://messageID
        messageInfo: // V2TIMMessage
    },
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

参考：
<a href = "#V2TIMMessage">V2TIMMessage</a>

##### 代码示例

```js
let data = await tencentCloudChat.createTextMessage({"text":"1"})
```

<a id = "createTextAtMessage"></a>

#### createTextAtMessage

2.2 创建文本消息，并且可以附带 @ 提醒功能

##### params

```js
{
    text:string, //必填
    atUserList:string[] //必填
}
```

##### callback

```js
success:
// 只列出data里的字段
{
    code:0, 
    data:{
        id://messageID
        messageInfo://V2TIMMessage
    },
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

参考：
<a href = "#V2TIMMessage">V2TIMMessage</a>

##### 代码示例

```js
let data = await tencentCloudChat.createTextAtMessage({"text":"1","atUserList":[""]})
```

<a id = "createCustomMessage"></a>

#### createCustomMessage

创建自定义消息

##### params

```js
{
    data:string,
    desc:string, //选填
    extension:string//选填
}
```

###### callback

```js
success:
// 只列出data里的字段
{
    code:0, 
    data:{
        id://messageID
        messageInfo://V2TIMMessage
    },
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

参考：
<a href = "#V2TIMMessage">V2TIMMessage</a>

##### 代码示例

```js
let data = await tencentCloudChat.createCustomMessage({"data":"1"})
```

<a id = "createImageMessage"></a>

#### createImageMessage

创建图片消息（图片最大支持 28 MB

##### params

```js
{
   imagePath:string //必填
}
```

##### callback

```js
success:
// 只列出data里的字段
{
    code:0, 
    data:{
        id://messageID
        messageInfo://V2TIMMessage
    },
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

参考：
<a href = "#V2TIMMessage">V2TIMMessage</a>

##### 代码示例

```js
let data = await tencentCloudChat.createImageMessage({"imagePath":""})
```

<a id = "createSoundMessage"></a>

#### createSoundMessage

创建语音消息（语音最大支持 28 MB

##### params

```js
{
   soundPath:string,
   duration:int
}
```

##### callback

```js
success:
// 只列出data里的字段
{
    code:0, 
    data:{
        id://messageID
        messageInfo://V2TIMMessage
    },
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

参考：
<a href = "#V2TIMMessage">V2TIMMessage</a>

##### 代码示例

```js
let data = await tencentCloudChat.createSoundMessage({"soundPath":"","duration":0})
```

<a id = "createVideoMessage"></a>

#### createVideoMessage

创建视频消息（视频最大支持 100 MB）

##### params

```js
{
   videoFilePath:string,
   type:string,
   duration:int,
   snapshotPath:string
}
```

##### callback

```js
success:
// 只列出data里的字段
{
    code:0, 
    data:{
        id://messageID
        messageInfo://V2TIMMessage
    },
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

参考：
<a href = "#V2TIMMessage">V2TIMMessage</a>

##### 代码示例

```js
let data = await tencentCloudChat.createVideoMessage({"videoFilePath":"","type":"mp4","duration":0,"snapshotPath":""})
```

<a id = "createFileMessage"></a>

#### createFileMessage

创建文件消息（文件最大支持 100 MB

##### params

```js
{
   filePath:string,
   fileName:string,
}
```

##### callback

```js
success:
// 只列出data里的字段
{
    code:0, 
    data:{
        id://messageID
        messageInfo://V2TIMMessage
    },
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

参考：
<a href = "#V2TIMMessage">V2TIMMessage</a>

##### 代码示例

```js
let data = await tencentCloudChat.createFileMessage({"filePath":"","fileName":"pic"})
```

<a id = "createLocationMessage"></a>

#### createLocationMessage

创建地理位置消息

##### params

```js
{
   desc:string,
   longitude:double,
    latitude:double,
}
```

##### callback

```js
success:
// 只列出data里的字段
{
    code:0, 
    data:{
        id://messageID
        messageInfo://V2TIMMessage
    },
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

参考：
<a href = "#V2TIMMessage">V2TIMMessage</a>

##### 代码示例

```js
let data = await tencentCloudChat.createLocationMessage({"desc":"上海","longitude":"","latitude":""})
```

<a id = "createFaceMessage"></a>

#### createFaceMessage

创建表情消息

##### params

```js
{
   index:, //数字
   data:string,
}
```

##### callback

```js
success:
// 只列出data里的字段
{
    code:0, 
    data:{
        id://messageID
        messageInfo://V2TIMMessage
    },
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

参考：
<a href = "#V2TIMMessage">V2TIMMessage</a>

##### 代码示例

```js
let data = await tencentCloudChat.createFaceMessage({"index":0,"data":"data"})
```

<a id = "createMergerMessage"></a>

#### createMergerMessage

创建合并消息（5.2.210 及以上版本支持）

##### params

```js
{
   msgIDList:string[], //最大支持 300 条，消息对象必须是 V2TIM_MSG_STATUS_SEND_SUCC 状态，消息类型不能为 V2TIMGroupTipsElem
   title:string,//合并消息的来源，比如 "vinson 和 lynx 的聊天记录"、"xxx 群聊的聊天记录"。
   abstractList：string[], //合并消息的摘要列表(最大支持 5 条摘要，每条摘要的最大长度不超过 100 个字符),不同的消息类型可以设置不同的摘要信息，比如: 文本消息可以设置为：sender：text，图片消息可以设置为：sender：[图片]，文件消息可以设置为：sender：[文件]。
   compatibleText:string //合并消息兼容文本，低版本 SDK 如果不支持合并消息，默认会收到一条文本消息，文本消息的内容为 compatibleText， 该参数不能为 null。
}
```

##### callback

```js
success:
// 只列出data里的字段
{
    code:0, 
    data:{
        id://messageID
        messageInfo://V2TIMMessage
    },
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

参考：
<a href = "#V2TIMMessage">V2TIMMessage</a>

##### 代码示例

```js
let data = await tencentCloudChat.createMergerMessage({"msgIDList":[""],"abstractList":[""],"compatibleText":"","title":""})
```

<a id = "createForwardMessage"></a>

#### createForwardMessage

创建转发消息（5.2.210 及以上版本支持）

##### params

```js
{
   msgID:string,
}
```

##### callback

```js
success:
// 只列出data里的字段
{
    code:0, 
    data:{
        id://messageID
        messageInfo://V2TIMMessage
    },
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

参考：
<a href = "#V2TIMMessage">V2TIMMessage</a>

##### 代码示例

```js
let data = await tencentCloudChat.createForwardMessage({"msgID":""})
```

<a id = "createTargetedGroupMessage"></a>

#### createTargetedGroupMessage

创建定向群消息（6.0 及以上版本支持）

##### params

```
{
   msgID:string,//createMessage函数中返回的ID
   receiverList:string[]
}
```

##### callback

```js
success:
// 只列出data里的字段
{
    code:0, 
    data:{
        id://messageID
        messageInfo://V2TIMMessage
    },
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

参考：
<a href = "#V2TIMMessage">V2TIMMessage</a>

##### 代码示例

```js
let data = await tencentCloudChat.createTargetedGroupMessage({"index":0,"data":""})
```

<a id = "sendMessage"></a>

#### sendMessage

发送高级消息（高级版本：可以指定优先级，推送信息等特性)

##### params

```js
{
   id:string,//createMessage函数中返回的ID
   receiver:string, //选填接收者ID，在发送C2C消息时填写
   groupID:string, //选填群组ID，在发送群组消息时填写
   priority:int, //选填，V2TIM_Priority
   onlineUserOnly:boolean, //选填，是否只有在线用户才能收到，如果设置为 true ，接收方历史消息拉取不到，常被用于实现“对方正在输入”或群组里的非重要提示等弱提示功能，该字段不支持 AVChatRoom。
   cloudCustomData:string, //选填，云端自定义数据（云端保存，会发送到对端，程序卸载重装后还能拉取到)
   localCustomData:string, //选填，消息自定义数据，可以用来标记语音、视频消息是否已经播放（本地保存，不会发送到对端，程序卸载重装后失效）
   isExcludedFromUnreadCount:boolean, //选填，消息是否不计入会话未读数：默认为 false，表明需要计入会话未读数，设置为 true，表明不需要计入会话未读数。会议群（Meeting）默认不支持
   isExcludedFromLastMessage:boolean, //选填，获取消息是否不计入会话 lastMessage
   isSupportMessageExtension:boolean, //选填，设置支持消息扩展（需要您购买旗舰版套餐）直播群（AVChatRoom）消息不支持该功能。 您需要先到 IM 控制台配置该功能。
   needReadReceipt:boolean, //选填，消息是否需要已读回执。群聊消息需要您先到 IM 控制台配置支持已读回执的群类型。单聊消息支持该特性。群聊消息和单聊消息都需要购买旗舰版套餐包。
   offlinePushInfo:V2TIMOfflinePushInfo, // 选填，离线推送时携带的标题和内容。
}
```

###### callback

```js
success:
// 只列出data里的字段
{
    code:0, 
    data: //V2TIMMessage,
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```
> - sendMessage接口即可以发送c2c消息，也可以发送群组消息，发送消息时param中receiver和groupID二选一。若发送群内制定消息时两者都需要填写。
> - 6.0 及以上版本支持 groupID 和 receiver 同时设置，如果同时设置，表示在群内给 receiver 发送定向消息，如果需要给多个 receiver 发送定向消息，请先调用 createTargetedGroupMessage 接口创建定向消息，再调用 sendMessage 接口发送。
> - 设置 offlinePushInfo 字段，需要先在 V2TIMOfflinePushManager 开启推送，推送开启后，除了自定义消息，其他消息默认都会推送。
> - 如果自定义消息也需要推送，请设置 offlinePushInfo 的 desc 字段，设置成功后，推送的时候会默认展示 desc 信息。
> - AVChatRoom 群聊不支持 onlineUserOnly 字段，如果是 AVChatRoom 请将该字段设置为 false。
> - 如果设置 onlineUserOnly 为 true 时，该消息为在线消息且不会被计入未读计数。

参考：
<a href = "#V2TIMMessage">V2TIMMessage</a>
<a href = "#V2TIM_Priority">V2TIM_Priority</a>

##### 代码示例

```js
let data = await tencentCloudChat.sendMessage({"id":"","groupID":""})
```

<a id = "setC2CReceiveMessageOpt"></a>

#### setC2CReceiveMessageOpt

设置针对某个用户的 C2C 消息接收选项（支持批量设置）

##### params

```
{
   userIDList:string[],
   opt:int, //V2TIM_MessageOpt

}
```

 参考：
<a href = "#V2TIM_MessageOpt">V2TIM_MessageOpt</a>

##### callback

```js
success:
// 只列出data里的字段
{
    code:0, 
    data:"",
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

> 请注意:
>     该接口支持批量设置，您可以通过参数 userIDList 设置一批用户，但一次最大允许设置 30 个用户。
>     该接口调用频率被限制为1秒内最多调用5次。
> ##### 代码示例

```js
let data = await tencentCloudChat.setC2CReceiveMessageOpt({"userIDList":[""],"opt":1})
```

<a id = "getC2CReceiveMessageOpt"></a>

#### getC2CReceiveMessageOpt

查询针对某个用户的 C2C 消息接收选项

##### params

```
{
   userIDList:string[],
}
```

##### callback

```js
success:
// 只列出data里的字段
{
    code:0, 
    data:[{
        c2CReceiveMessageOpt: //数字,V2TIM_MessageOpt
        userID: //字符串
    },{}],
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

 参考：
<a href = "#V2TIM_MessageOpt">V2TIM_MessageOpt</a>

##### 代码示例

```js
let data = await tencentCloudChat.getC2CReceiveMessageOpt({"userIDList":[""]})
```

<a id = "setGroupReceiveMessageOpt"></a>

#### setGroupReceiveMessageOpt

设置群消息的接收选项

##### params

```js
{
   groupID:string,
   opt:int //V2TIM_MessageOpt
}
```

 参考：
<a href = "#V2TIM_MessageOpt">V2TIM_MessageOpt</a>

##### callback

```js
success:
// 只列出data里的字段
{
    code:0, 
    data:"",
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

##### 代码示例

```js
let data = await tencentCloudChat.setGroupReceiveMessageOpt({"groupID":"","opt":1})
```

<a id = "getC2CHistoryMessageList"></a>

#### getC2CHistoryMessageList

获取单聊历史消息

##### params

```
{
   userID:string,
   count:int
   lastMsgID:string,
}
```

##### callback

```js
success:
// 只列出data里的字段
{
    code:0, 
    data:, //V2TIMMessage[]
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

 参考：
<a href = "#V2TIMMessage">V2TIMMessage</a>

##### 代码示例

```js
let data = await tencentCloudChat.getC2CHistoryMessageList({"count":1,"userID":"","lastMsgID":""})
```

<a id = "getGroupHistoryMessageList"></a>

#### getGroupHistoryMessageList

获取群组历史消息

##### params

```js
{
   groupID:string,
   count:int
   msgID:string,
}
```

##### callback

```js
success:
// 只列出data里的字段
{
    code:0, 
    data:, //V2TIMMessage[]
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

 参考：
<a href = "#V2TIMMessage">V2TIMMessage</a>

##### 代码示例

```js
let data = await tencentCloudChat.getGroupHistoryMessageList({"count":1,"groupID":"","lastMsgID":""})
```

<a id = "getHistoryMessageList"></a>

#### getHistoryMessageList

获取历史消息高级接口

##### params

```js
{
    lastMsgID:,//字符串
    getType:    //数字,V2TIM_GetType
    userID:string, // 选填
    groupID:string,// 选填
    count:int, //必填
    lastMsgSeq:long, //// 选填，拉取群消息的起始 sequence。
    messageTypeList:int[] //// 选填，V2TIM_GetType[],拉取的消息类型集合，getType 为 V2TIM_GET_LOCAL_OLDER_MSG 和 V2TIM_GET_LOCAL_NEWER_MSG 有效，传 null 表示拉取全部类型消息
}
```

> 当设置从云端拉取时，会将本地存储消息列表与云端存储消息列表合并后返回。如果无网络，则直接返回本地消息列表。
> 关于 getType、拉取消息的起始消息、拉取消息的时间范围 的使用说明：
> 
> - getType 可以用来表示拉取的方向：往消息时间更老的方向 或者 往消息时间更新的方向；
> - lastMsg/lastMsgSeq 用来表示拉取时的起点，第一次拉取时可以不填或者填 0；
> - getTimeBegin/getTimePeriod 用来表示拉取消息的时间范围，时间范围的起止时间点与拉取方向(getType)有关；
> - 当起始消息和时间范围都存在时，结果集可理解成：「单独按起始消息拉取的结果」与「单独按时间范围拉取的结果」 取交集；
> - 当起始消息和时间范围都不存在时，结果集可理解成：从当前会话最新的一条消息开始，按照 getType 所指定的方向和拉取方式拉取。

##### callback

```js
success:
// 只列出data里的字段
{
    code:0, 
    data:, //V2TIMMessage[]
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

 参考：
<a href = "#V2TIMMessage">V2TIMMessage</a>
<a href = "#V2TIM_GetType">V2TIM_GetType</a>

##### 代码示例

```js
let data = await tencentCloudChat.getHistoryMessageList({"groupID":"","lastMsgID":"","count":1})
```

<a id = "revokeMessage"></a>

#### revokeMessage

撤回消息

##### params

```js
{
   lastMsgID:string //必填
}
```

##### callback

```js
success:
// 只列出data里的字段
// 只列出data里的字段
{
    code:0, 
    data:"",
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

##### 代码示例

```js
let data = await tencentCloudChat.revokeMessage({"lastMsgID":""})
```

<a id = "modifyMessage"></a>

#### modifyMessage

消息变更

##### params

```js
{
   message: //V2TIMMessage
}
```

##### callback

```js
success:
// 只列出data里的字段
{
    code:0, 
    data:{
        code:
        desc:
        message://V2TIMMessage
    },  
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

 参考：
<a href = "#V2TIMMessage">V2TIMMessage</a>

##### 代码示例

```js
let data = await tencentCloudChat.modifyMessage({"message":{"msgID":""}})
```

<a id = "markC2CMessageAsRead"></a>

#### markC2CMessageAsRead

标记单聊会话已读

##### params

```js
{
   userID:string
}
```

##### callback

```js
success:
// 只列出data里的字段
{
    code:0, 
    data:"",
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

##### 代码示例

```js
let data = await tencentCloudChat.markC2CMessageAsRead({"userID":""})
```

<a id = "markGroupMessageAsRead"></a>

#### markGroupMessageAsRead

标记群组会话已读

##### params

```js
{
   groupID:string
}
```

##### callback

```js
success:
// 只列出data里的字段
{
    code:0, 
    data:"",
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

##### 代码示例

```js
let data = await tencentCloudChat.markGroupMessageAsRead({"groupID":""})
```

<a id = "markAllMessageAsRead"></a>

#### markAllMessageAsRead

标记所有会话为已读（5.8及其以上版本支持）

##### params

```
无
```

##### callback

```js
success:
// 只列出data里的字段
{
    code:0, 
    data:"",
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

##### 代码示例

```js
let data = await tencentCloudChat.markAllMessageAsRead({})
```

<a id = "deleteMessageFromLocalStorage"></a>

#### deleteMessageFromLocalStorage

删除本地消息

##### params

```
{
    msgID:string
}
```

##### callback

```js
success:
// 只列出data里的字段
// 只列出data里的字段
{
    code:0, 
    data:"",
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

##### 代码示例

```js
let data = await tencentCloudChat.deleteMessageFromLocalStorage({"msgID":""})
```

<a id = "clearC2CHistoryMessage"></a>

#### clearC2CHistoryMessage

清空单聊本地及云端的消息（不删除会话

##### params

```
{
    userID:string
}
```

##### callback

```js
success:
// 只列出data里的字段
// 只列出data里的字段
{
    code:0, 
    data:"",
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

##### 代码示例

```js
let data = await tencentCloudChat.clearC2CHistoryMessage({"userID":""})
```

<a id = "clearGroupHistoryMessage"></a>

#### clearGroupHistoryMessage

清空群聊本地及云端的消息（不删除会话）

##### params

```
{
    groupID:string
}
```

##### callback

```js
success:
// 只列出data里的字段
// 只列出data里的字段
{
    code:0, 
    data:"",
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

##### 代码示例

```js
let data = await tencentCloudChat.clearC2CHistoryMessage({"userID":""})
```

<a id = "insertGroupMessageToLocalStorage"></a>

#### insertGroupMessageToLocalStorage

向群组消息列表中添加一条消息

##### params

```js
{
    data:string, // 发送的消息内容
    groupID:string,
    sender:string
}
```

##### callback

```js
success:
// 只列出data里的字段
// 只列出data里的字段
{
    code:0, 
    data:{V2TIMMessage},
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

##### 代码示例

```js
let data = await tencentCloudChat.insertGroupMessageToLocalStorage({"groupID":"","sender":"","data":""})
```

<a id = "insertC2CMessageToLocalStorage"></a>

#### insertC2CMessageToLocalStorage

向C2C消息列表中添加一条消息

##### params

```
{
    data:string,
    userID:string,
    sender:string
}
```

##### callback

```js
success:
// 只列出data里的字段
// 只列出data里的字段
{
    code:0, 
    data:{V2TIMMessage},
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

##### 代码示例

```js
let data = await tencentCloudChat.insertC2CMessageToLocalStorage({"userID":"","sender":"","data":""})
```

<a id = "findMessages"></a>

#### findMessages

根据 messageID 查询指定会话中的本地消息

##### params

```
{
    messageIDList:string[], //V2TIMMessage返回里的msgID
}
```

##### callback

```js
success:
// 只列出data里的字段
{
    code:0, 
    data:, //V2TIMMessage
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

参考：
<a href = "#V2TIMMessage">V2TIMMessage</a>

##### 代码示例

```js
let data = await tencentCloudChat.findMessages({"messageIDList":[""]})
```

<a id = "searchLocalMessages"></a>

#### searchLocalMessages

搜索本地消息（5.4.666 及以上版本支持

##### params

```js
{
    searchParam:{
        keywordList://字符串列表，关键字列表，最多支持5个。当消息发送者以及消息类型均未指定时，关键字列表必须非空；否则，关键字列表可以为空。
        conversationID: //选填，搜索“全部会话”还是搜索“指定的会话”：如果设置 conversationID == null，代表搜索全部会话。如果设置 conversationID != null，代表搜索指定会话。
        messageTypeList: //选填，V2TIM_ElemType[],指定搜索的消息类型集合，传 null 表示搜索支持的全部类型消息（V2TIMFaceElem 和 V2TIMGroupTipsElem 不支持）。
        type: //选填，V2TIM_KeywordListMatchType
        pageSize: //选填，每页结果数量：用于分页展示查找结果，如不希望分页可将其设置成 0，但如果结果太多，可能会带来性能问题。
        searchTimePosition: //选填，搜索的起始时间点。默认为0即代表从现在开始搜索。UTC 时间戳，单位：秒
        pageIndex: //选填，分页的页号：用于分页展示查找结果，从零开始起步。
        searchTimePeriod://选填，从起始时间点开始的过去时间范围，单位秒。默认为0即代表不限制时间范围，传24x60x60代表过去一天。
        userIDList: //选填，指定 userID 发送的消息，最多支持5个。
    }
}
```

参考：
<a href = "#V2TIM_ElemType">V2TIM_ElemType</a>
<a href = "#V2TIM_KeywordListMatchType">V2TIM_KeywordListMatchType</a>

> pageIndex:  
> 分页的页号：用于分页展示查找结果，从零开始起步。 比如：您希望每页展示 10 条结果，请按照如下规则调用：
> 
> - 首次调用：通过参数 pageSize = 10, pageIndex = 0 调用 searchLocalMessage，从结果回调中的 totalCount 可以>获知总共有多少条结果。
> - 计算页数：可以获知总页数：totalPage = (totalCount % pageSize == 0) ? (totalCount / pageSize) : >(totalCount / pageSize + 1) 。
> - 再次调用：可以通过指定参数 pageIndex （pageIndex < totalPage）返回后续页号的结果。

##### callback

```js
success:
// 只列出data里的字段
{
    code:0, 
    data:{
        totalCount:int
        messageSearchResultItems: // V2TIMMessageSearchResultItem[]
    },
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

参考：
<a href = "#V2TIMMessageSearchResultItem">V2TIMMessageSearchResultItem</a>

##### 代码示例

```js
let data = await tencentCloudChat.searchLocalMessages({"searchParam":{"keywordList":[""]}})
```

<a id = "sendMessageReadReceipts"></a>

#### sendMessageReadReceipts

发送消息已读回执（6.1 及其以上版本支持

##### params

```
{
    msgIDList:string[]
}
```

##### callback

```js
success:
// 只列出data里的字段
{
    code:0, 
    data:"",
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

##### 代码示例

```js
let data = await tencentCloudChat.sendMessageReadReceipts({"messageIDList":[""]})
```

<a id = "getMessageReadReceipts"></a>

#### getMessageReadReceipts

5.18 获取消息已读回执（6.1 及其以上版本支持）

##### params

```
{
    msgIDList:string[]
}
```

##### callback

```js
success:
// 只列出data里的字段
{
    code:0, 
    data:, //V2TIMMessageReceipt[]
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

参考：
<a href = "#V2TIMMessageReceipt">V2TIMMessageReceipt</a>

##### 代码示例

```js
let data = await tencentCloudChat.getMessageReadReceipts({"messageIDList":[""]})
```

<a id = "getGroupMessageReadMemberList"></a>

#### getGroupMessageReadMemberList

获取群消息已读群成员列表（6.1 及其以上版本支持

###### params

```js
{
    msgID:string,
    filter:int, //选填
    nextSeq:long, //选填
    count:int //选填
}
```

##### callback

```js
success:
// 只列出data里的字段
{
    code:0, 
    data:{
        nextSeq: //分页拉取的游标，第一次默认取传 0，后续分页拉传上一次分页拉取成功回调里的 nextSeq。
        isFinished: //成员列表是否已经拉取完毕.true:拉取完毕 false:还有成员需要继续拉取
        memberInfoList: //V2TIMGroupMemberInfo[]
    }
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

参考：
<a href = "#V2TIMGroupMemberInfo">V2TIMGroupMemberInfo</a>

##### 代码示例

```js
let data = await tencentCloudChat.getGroupMessageReadMemberList({"messageID":""})
```

<a id = "setMessageExtensions"></a>

#### setMessageExtensions

设置消息扩展（6.7 及其以上版本支持，需要您购买旗舰版套餐

##### params

```js
{
    msgID:string,
    extensions:[{
        extensionKey:
        extensionValue:
    },{}]
}
```

##### callback

```js
success:
// 只列出data里的字段
{
    code:0, 
    data:, //V2TIMMessageExtensionResult[]
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

参考：
<a href = "#V2TIMMessageExtensionResult">V2TIMMessageExtensionResult</a>

##### 代码示例

```js
let data = await tencentCloudChat.setMessageExtensions({"msgID":"","extensions":[{"key":"key","value":"value"}]})
```

<a id = "getMessageExtensions"></a>

#### getMessageExtensions

获取消息扩展（6.7 及其以上版本支持，需要您购买旗舰版套餐）

##### params

```
{
    msgID:string,
}
```

##### callback

```js
success:
// 只列出data里的字段
// 只列出data里的字段
{
    code:0, 
    data:[{
        extensionKey,
        extensionValue
    }],
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

##### 代码示例

```js
let data = await tencentCloudChat.getMessageExtensions({"msgID":""})
```

<a id = "deleteMessageExtensions"></a>

#### deleteMessageExtensions

删除消息扩展（6.7 及其以上版本支持，需要您购买旗舰版套餐）

##### params

```js
{
    msgID:string,
    keys:string[] //必填
}
```

##### callback

```js
success:
// 只列出data里的字段
{
    code:0, 
    data:, //V2TIMMessageExtensionResult[]
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

参考：
<a href = "#V2TIMMessageExtensionResult">V2TIMMessageExtensionResult</a>

<a id = "downloadMessage"></a>

#### downloadMessage

下载消息（仅限图片、视频、文件消息）

##### params

```js
{
    msgID:string,
    imageType:number, //图片类型，所下载的message为图片消息时有效
    isSnapshot:boolean // 是否为视频封面，所下载的message为视频时有效
}
```

##### callback

```js
success:
// 只列出data里的字段
{
    code:0, 
    data:"",
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```
> 返回只说明是否成功下载。成功下载后请到相关目录寻找下载内容

##### 代码示例

```js
let data = await tencentCloudChat.downloadMessage({"msgID":"","imageType":0,"isSnapshot":false})
```

<a id = "getMessageOnlineUrl"></a>

#### getMessageOnlineUrl

获取消息下载URL（图片，文件，视频，语音消息）

##### params

```js
{
    msgID:string,
}
```

##### callback

```js
success:
// 只列出data里的字段
{
    code:0, 
    data:{
        imageElem: V2TIMImageElem // 仅当消息为图片消息时返回
        soundElem: V2TIMSoundElem // 仅当消息为语音消息时返回
        videoElem: V2TIMVideoElem // 仅当消息为视频消息时返回
        fileElem: V2TIMfileElem  // 仅当消息为文件消息时返回
    },
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

参考：
<a href = "#V2TIMImageElem">V2TIMImageElem</a>
<a href = "#V2TIMSoundElem">V2TIMSoundElem</a>
<a href = "#V2TIMVideoElem">V2TIMVideoElem</a>
<a href = "#V2TIMfileElem">V2TIMfileElem</a>

##### 代码示例

```js
let data = await tencentCloudChat.getMessageOnlineUrl({"msgID":""})
```

<a id = "downloadMergerMessage"></a>

#### downloadMergerMessage

获取已发送的合并消息内容

##### params

```js
{
    msgID:string,
}
```

##### callback

```js
success:
// 只列出data里的字段
{
    code:0, 
    data:[{
        V2TIMMessage
    }], // 合并消息列表
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

参考：
<a href = "#V2TIMMessage">V2TIMMessage</a>

##### 代码示例

```js
let data = await tencentCloudChat.downloadMergerMessage({"msgID":""})
```

### V2TIMGroupManager

群组高级接口，包含了群组的高级功能，例如群成员邀请、非群成员申请进群等操作接口。



<a id = "getJoinedGroupList"></a>

#### getJoinedGroupList

获取当前用户已经加入的群列表

##### params

无

##### callback

```js
success:
// 只列出data里的字段
{
    code:0, 
    data:, //V2TIMGroupInfo[]
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

参考：
<a href = "#V2TIMGroupInfo">V2TIMGroupInfo</a>

##### 代码示例

```js
let data = await tencentCloudChat.getJoinedGroupList({})
```

<a id = "getGroupsInfo"></a>

#### getGroupsInfo

拉取群资料

##### params

```
{
    groupIDList:string[]
}
```

##### callback

```js
success:
// 只列出data里的字段
{
    code:0, 
    data:[{
        resultcode //获取返回码。0：成功；非0：失败
        resultMessage,//获取结果信息
        groupInfo://V2TIMGroupInfo
    },{}],
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

参考：
<a href = "#V2TIMGroupInfo">V2TIMGroupInfo</a>

##### 代码示例

```js
let data = await tencentCloudChat.getGroupsInfo({"groupIDList":[""]})
```

<a id = "searchGroups"></a>

#### searchGroups

搜索群资料（5.4.666 及以上版本支持）

##### params

```js
{
    searchParam:{
        keywordList: //设置搜索关键字列表，最多支持5个。
        isSearchGroupID: //布尔，设置是否搜索群 ID
        isSearchGroupName://布尔，设置是否搜索群名称
    }
}
```

###### callback

```js
success:
// 只列出data里的字段
{
    code:0, 
    data:,//V2TIMGroupInfo[]
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

参考：
<a href = "#V2TIMGroupInfo">V2TIMGroupInfo</a>

##### 代码示例

```js
let data = await tencentCloudChat.searchGroups({"searchParam":{"keywordList":[""],"isSearchGroupID":false,"isSearchGroupName":false}})
```

<a id = "setGroupInfo"></a>

#### setGroupInfo

修改群资料

##### params

```js
{
    info: //V2TIMGroupInfo
}
```

参考：
<a href = "#V2TIMGroupInfo">V2TIMGroupInfo</a>

##### callback

```js
success:
// 只列出data里的字段
{
    code:0, 
    data:"",
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

##### 代码示例

```js
let data = await tencentCloudChat.setGroupInfo({"groupID":"","groupType":"work"})
```

<a id = "initGroupAttributes"></a>

#### initGroupAttributes

初始化群属性，会清空原有的群属性列表

##### params

```js
{
    groupID:string,
    attributes: // map<string,string>
}
```

##### callback

```js
success:
// 只列出data里的字段
{
    code:0, 
    data:"",
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

##### 代码示例

```js
let data = await tencentCloudChat.initGroupAttributes({"groupID":"","attributes":{"key":"key","valule":"value"}})
```

<a id = "setGroupAttributes"></a>

#### setGroupAttributes

设置群属性。已有该群属性则更新其 value 值，没有该群属性则添加该属性

##### params

```js
{
    groupID:string,
    attributes: // map<string,string>
}
```

##### callback

```js
success:
// 只列出data里的字段
{
    code:0, 
    data:"",
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

##### 代码示例

```js
let data = await tencentCloudChat.setGroupAttributes({"groupID":"","attributes":{"key":"key","valule":"value"}})
```

<a id = "deleteGroupAttributes"></a>

#### deleteGroupAttributes

删除指定群属性，keys 传 null 则清空所有群属性。

##### params

```
{
    groupID:string,
    keys:string[]
}
```

##### callback

```js
success:
// 只列出data里的字段
{
    code:0, 
    data:"",
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

> 6.7 及其以前版本，只支持 AVChatRoom 直播群；
> 从 6.8 版本开始，同时支持 AVChatRoom、Public、Meeting、Work 四种群类型；
> 从 7.0 版本开始，除了话题外，群属性支持所有的群类型。

##### 代码示例

```js
let data = await tencentCloudChat.deleteGroupAttributes({"groupID":"","keys":["keys"]})
```

<a id = "getGroupAttributes"></a>

#### getGroupAttributes

获取指定群属性，keys 传 null 则获取所有群属性。

##### params

```
{
    groupID:string,
    keys:string[]
}
```

##### callback

```js
success:
// 只列出data里的字段
{
    code:0, 
    data:{}, //map<string,string>
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

##### 代码示例

```js
let data = await tencentCloudChat.getGroupAttributes({"groupID":"","keys":["keys"]})
```

<a id = "getGroupOnlineMemberCount"></a>

#### getGroupOnlineMemberCount

 获取指定群在线人数

##### params

```
{
    groupID:string,
}
```

##### callback

```js
success:
// 只列出data里的字段
{
    code:0, 
    data:,  //数字，在线人数
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

##### 代码示例

```js
let data = await tencentCloudChat.getGroupOnlineMemberCount({"groupID":""})
```

<a id = "getGroupMemberList"></a>

#### getGroupMemberList

获取群成员列表

##### params

```js
{
    groupID:string,
    filter:int, // 选填，V2TIM_GroupMemberFilter
    nextSeq://选填，数字，分页拉取标志，第一次拉取填0，回调成功如果 nextSeq 不为零，需要分页，传入再次拉取，直至为0。
}
```

##### callback

```js
success:
// 只列出data里的字段
{
    code:0, 
    data:{
        nextSeq:
        memberInfoList: // V2TIMGroupMemberFullInfo[]
    },
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

参考：
<a href = "#V2TIMGroupMemberFullInfo">V2TIMGroupMemberFullInfo</a>

##### 代码示例

```js
let data = await tencentCloudChat.getGroupMemberList({"groupID":"","filter":null,"nextSeq":null})
```

<a id = "getGroupMembersInfo"></a>

#### getGroupMembersInfo

获取指定的群成员资料

##### params

```
{
    groupID:string,
    memberList:string[],
}
```

##### callback

```js
success:
// 只列出data里的字段
{
    code:0, 
    data: // V2TIMGroupMemberFullInfo[]
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

参考：
<a href = "#V2TIMGroupMemberFullInfo">V2TIMGroupMemberFullInfo</a>

##### 代码示例

```js
let data = await tencentCloudChat.getGroupMembersInfo({"groupID":"","memberList":[""]})
```

<a id = "searchGroupMembers"></a>

#### searchGroupMembers

搜索群成员（5.4.666 及以上版本支持

##### params

```js
{
    param:{
        keywordList: //搜索关键字列表，最多支持5个。
        groupIDList: //选填，指定群 ID 列表，若为 null 则搜索全部群中的群成员
        isSearchMemberUserID: //是否搜索群成员 userID
        isSearchMemberNickName: //是否搜索群成员昵称
        isSearchMemberRemark: //是否搜索群成员备注
        isSearchMemberNameCard: //是否搜索群成员名片
    }
}
```

###### callback

```js
success:
// 只列出data里的字段
{
    code:0, 
    data: // V2TIMGroupMemberFullInfo[]
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

参考：
<a href = "#V2TIMGroupMemberFullInfo">V2TIMGroupMemberFullInfo</a>

##### 代码示例

```js
let data = await tencentCloudChat.searchGroupMembers({"param":{"keywordList":[""],"groupIDList":null,"isSearchMemberUserID":false,"isSearchMemberNickName":false,"isSearchMemberRemark":false,"isSearchMemberNameCard":false,"isSearchMemberNameCard":false}})
```

<a id = "setGroupMemberInfo"></a>

#### setGroupMemberInfo

修改指定的群成员资料

##### params

```js
{
    groupID:string,
    userID:
    nameCard: //选填，
    customInfo: //选填，mao<string,string>
}
```

##### callback

```js
success:
// 只列出data里的字段
{
    code:0, 
    data:"",
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

##### 代码示例

```js
let data = await tencentCloudChat.setGroupMemberInfo({"groupID":"","userID":""})
```

<a id = "muteGroupMember"></a>

#### muteGroupMember

禁言（只有管理员或群主能够调用）

##### params

```
{
    groupID:string,
    userID:string,
    seconds:int,
}
```

##### callback

```js
success:
// 只列出data里的字段
{
    code:0, 
    data:"",
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

##### 代码示例

```js
let data = await tencentCloudChat.muteGroupMember({"groupID":"groupid","userID":"userid","seconds":1000})
```

<a id = "inviteUserToGroup"></a>

#### inviteUserToGroup

邀请他人入群

##### params

```
{
    groupID:string,
    userList:string[],
}
```

##### callback

```js
success:
// 只列出data里的字段
{
    code:0, 
    data:[{
        memberID,
        result: //V2TIM_GroupMemberOperationResult
    },{}],
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

参考：
<a href = "#V2TIM_GroupMemberOperationResult">V2TIM_GroupMemberOperationResult</a>

##### 代码示例

```js
let data = await tencentCloudChat.inviteUserToGroup({"groupID":"groupid","userList":["user1"]})
```

<a id = "kickGroupMember"></a>

#### kickGroupMember

踢人（直播群踢人从 6.6 版本开始支持，需要您购买旗舰版套餐）

##### params

```
{
    groupID:string,
    memberList:string[],
    reason:string
}
```

###### callback

```js
success:
// 只列出data里的字段
{
    code:0, 
    data:[{
        memberID,
        result: //V2TIM_GroupMemberOperationResult
    },{}],
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

参考：
<a href = "#V2TIM_GroupMemberOperationResult">V2TIM_GroupMemberOperationResult</a>

##### 代码示例

```js
let data = await tencentCloudChat.kickGroupMember({"groupID":"groupid","memberList":["userid"],"reason":"reason"})
```

<a id = "setGroupMemberRole"></a>

#### setGroupMemberRole

切换群成员的角色。

##### params

```
{
    groupID:string,
    userID:string,
    role:int
}
```

##### callback

```js
success:
// 只列出data里的字段
{
    code:0, 
    data:"",
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

##### 代码示例

```js
let data = await tencentCloudChat.setGroupMemberRole({"groupID":"groupid","userID":"userid","role":0})
```

<a id = "markGroupMemberList"></a>

#### markGroupMemberList

标记群成员(从 6.6 版本开始支持，需要您购买旗舰版套餐)

##### params

```js
{
    groupID:string,
    memberIDList:string[],
    markType:int,
    enableMark:boolean //enableMark    true 表示添加标记，false 表示移除标记
}
```

##### callback

```js
success:
// 只列出data里的字段
{
    code:0, 
    data:"",
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

##### 代码示例

```js
let data = await tencentCloudChat.markGroupMemberList({"groupID":"groupid","memberIDList":["user1"],"markType":1,"enableMark":true})
```

<a id = "transferGroupOwner"></a>

#### transferGroupOwner

转让群主

##### params

```
{
    groupID:string,
    userID:string,
}
```

##### callback

```js
success:
// 只列出data里的字段
{
    code:0, 
    data:"",
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

##### 代码示例

```js
let data = await tencentCloudChat.transferGroupOwner({"groupID":"groupid","userID":"userid"})
```

<a id = "getGroupApplicationList"></a>

#### getGroupApplicationList

获取加群申请列表

##### params

```
无
```

##### callback

```js
success:
// 只列出data里的字段
{
    code:0, 
    data:{
        unreadCount,
        groupApplicationList:[{
            groupID:
            fromUser: //请求者 ID，请求加群:请求者，邀请加群:邀请人
            fromUserNickName:
            fromUserFaceUrl:
            toUser: //处理者 ID, 请求加群:0，邀请加群:被邀请人
            addTime: //群未决添加的时间，单位：毫秒
            requestMsg: //请求者添加的附加信息
            handledMsg: //处理者添加的附加信息，只有处理状态不为V2TIMGroupApplication#V2TIM_GROUP_APPLICATION_HANDLE_STATUS_UNHANDLED的时候有效
            type: //V2TIM_GroupApplicationType
            handleStatus: //V2TIM_GroupApplicationHandleStatus
            handleResult://V2TIM_GroupApplicationHandleResult
        },{}]
    },
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

参考：
<a href = "#V2TIM_GroupApplicationType">V2TIM_GroupApplicationType</a>
<a href = "#V2TIM_GroupApplicationHandleStatus">V2TIM_GroupApplicationHandleStatus</a>
<a href = "#V2TIM_GroupApplicationHandleResult">V2TIM_GroupApplicationHandleResult</a>

##### 代码示例

```js
let data = await tencentCloudChat.getGroupApplicationList({})
```

<a id = "acceptGroupApplication"></a>

#### acceptGroupApplication

同意某一条加群申请

##### params

```
{
    groupID:string,
    fromUser:string,
    toUser:string,
    reason:string
}
```

##### callback

```js
success:
// 只列出data里的字段
{
    code:0, 
    data:"",
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

##### 代码示例

```js
let data = await tencentCloudChatSDK.acceptGroupApplication({"groupID":"groupid","fromUser":"user1","reason":"reason"})
```

<a id = "refuseGroupApplication"></a>

#### refuseGroupApplication

拒绝某一条加群申请

##### params

```
{
    groupID:string,
    fromUser:string,
    toUser:string,
    reason:string
}
```

##### callback

```js
success:
// 只列出data里的字段
{
    code:0, 
    data:"",
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

##### 代码示例

```js
let data = await tencentCloudChat.refuseGroupApplication({"groupID":"groupid","fromUser":"user1","reason":"reason"})
```

<a id = "setGroupApplicationRead"></a>

#### setGroupApplicationRead

标记申请列表为已读

##### params

```
无
```

##### callback

```js
success:
// 只列出data里的字段
{
    code:0, 
    data:"",
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

##### 代码示例

```js
let data = await tencentCloudChat.setGroupApplicationRead({})
```

<a id = "getJoinedCommunityList"></a>

#### getJoinedCommunityList

 获取当前用户已经加入的支持话题的社群列表

##### params

```
无
```

##### callback

```js
success:
// 只列出data里的字段
{
    code:0, 
    data:,
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

##### 代码示例

```js
let data = await tencentCloudChat.getJoinedCommunityList({})
```

<a id = "createTopicInCommunity"></a>

#### createTopicInCommunity

 创建话题

##### params

```js
{
    groupID:string,
    topicInfo: //V2TIMTopicInfo，话题信息
}
```

参考：
<a href = "#V2TIMTopicInfo">V2TIMTopicInfo</a>

##### callback

```js
success:
// 只列出data里的字段
{
    code:0, 
    data: //V2TIMGroupInfo[]
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

参考：
<a href = "#V2TIMGroupInfo">V2TIMGroupInfo</a>

##### 代码示例

```js
let data = await tencentCloudChat.createTopicInCommunity({"groupID":"groupid","topicInfo":{"topicID":"topicid","topicName":"topicName","topicFaceURL":"","notification":"notification","introduction":"introduction","isAllMuted":false,"customString":"","draftText":""}})
```


<a id = "deleteTopicFromCommunity"></a>

#### deleteTopicFromCommunity

删除话题

##### params

```
{
    groupID:string,
    topicIDList:string[]
}
```

##### callback

```js
success:
// 只列出data里的字段
{
    code:0, 
    data:[{
        topicID,
        errorCode,
        errorMessage,
    }],
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

##### 代码示例

```js
let data = await tencentCloudChat.deleteTopicFromCommunity({"groupID":"groupid","topicIDList":["topicid"]})
```

<a id = "setTopicInfo"></a>

#### setTopicInfo

修改话题信息

##### params

```js
{
    groupID:string,
    topicInfo: //V2TIMTopicInfo，话题信息
}
```

参考：
<a href = "#V2TIMTopicInfo">V2TIMTopicInfo</a>

##### callback

```js
success:
// 只列出data里的字段
{
    code:0, 
    data:"",
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

##### 代码示例

```js
let data = await tencentCloudChat.setTopicInfo({"groupID":"groupid","topicInfo":{"topicID":"topicid","topicName":"topicName","topicFaceURL":"","notification":"","introduction":"","isAllMuted":"","customString":"","draftText":""}})
```

<a id = "getTopicInfoList"></a>

##### getTopicInfoList

获取话题列表

###### params

```
{
    groupID:string,
    topicIDList:string
}
```

###### callback

```js
success:
// 只列出data里的字段
{
    code:0, 
    data:[{
        topicID,
        errorCode,
        errorMessage,
    }],
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```
##### 代码示例

```js
let data = await tencentCloudChat.getTopicInfoList({"groupID":"groupid","topicIDList":["topicid"]})
```

### V2TIMSignalingManager


<a id = "addSignalingListener"></a>

#### addSignalingListener

添加信令监听

##### params

```js
let listener = new signalingListener({
    onReceiveNewInvitation:function(data){}, //收到邀请
    onInviteeAccepted:function(data){}, //被邀请者接受邀请
    onInviteeRejected:function(data){}, //被邀请者拒绝邀请
    onInvitationCancelled:function(data){}, //邀请被取消
    onInvitationTimeout:function(data){}, //邀请超时
    onInvitationModified:function(data){}, //邀请被修改（6.7 及其以上版本支持）
})
```

##### callback

```js
success:
// 只列出data里的字段
{
    method:"signalingListener", 
    type:
    data:“”,
    listenerUuid:"",
}

```

具体返回值参考 <a href = "#listener">EventListener</a>的<a href ="#V2TIMSignalingListener">V2TIMSignalingListener</a>

##### 代码示例

```js
let listener = new signalingListener({
    onReceiveNewInvitation:function(data){console.log(JSON.stringify(data))}
})
//添加好友监听
await tencentCloudChat.addSignalingListener(listener)
```

<a id = "removeSignalingListener"></a>

#### removeSignalingListener

移除信令监听

##### params

```js
let listener = new signalingListener({
    onReceiveNewInvitation:function(data){}, //收到邀请
    onInviteeAccepted:function(data){}, //被邀请者接受邀请
    onInviteeRejected:function(data){}, //被邀请者拒绝邀请
    onInvitationCancelled:function(data){}, //邀请被取消
    onInvitationTimeout:function(data){}, //邀请超时
    onInvitationModified:function(data){}, //邀请被修改（6.7 及其以上版本支持）
})
```

##### callback

```js
success:
// 只列出data里的字段
{
    code:0, 
    data:“”,
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

参考 <a href = "#listener">EventListener</a>的<a href ="#V2TIMSignalingListener">V2TIMSignalingListener</a>
##### 代码示例

```js
let listener = new signalingListener({
    onReceiveNewInvitation:function(data){console.log(JSON.stringify(data))}
})
//添加好友监听
await tencentCloudChat.addSignalingListener(listener)
//删除好友监听
await tencentCloudChat.removeSignalingListener(listener)
```

<a id = "invite"></a>

#### invite

邀请某个人

##### params

```js
{
    invitee:string,
    data:string,
    onlineUserOnly:boolean,
    timeout:int,
    offlinePushInfo:V2TIMOfflinePushInfo 
}
```

##### callback

```js
success:
// 只列出data里的字段
{
    code:0, 
    data:“”,
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

##### 代码示例

```js
let data = await tencentCloudChat.invite({
            invitee: "",
            data: "",
            timeout: 30,
            onlineUserOnly: false,
            offlinePushInfo: {}
        })
```

<a id = "inviteInGroup"></a>

#### inviteInGroup

邀请群内的某些人

##### params

```js
{
    groupID:string,
    data:string,
    inviteeList:string[],
    timeout:int,
    onlineUserOnly:boolean
}
```

##### callback

```js
success:
// 只列出data里的字段
{
    code:0, 
    data:“”,
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

##### 代码示例

```js
let data = await tencentCloudChat.inviteInGroup({
            groupID: "",
            inviteeList: [""],
            data: "hhh",
            timeout:30,
            onlineUserOnly: false,
        })
```

<a id = "cancel"></a>

#### cancel

邀请方取消邀请

##### params

```
{
    inviteID:string,
    data:string,
}
```

##### callback

```js
success:
// 只列出data里的字段
{
    code:0, 
    data:“”,
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

##### 代码示例

```js
let data = await tencentCloudChat.cancel({
            inviteID: inviteID,
            data: "123",
        })
```

<a id = "accept"></a>

#### accept

接收方接收邀请

##### params

```
{
    inviteID:string,
    data:string,
}
```

##### callback

```js
success:
// 只列出data里的字段
{
    code:0, 
    data:“”,
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

##### 代码示例

```js
let data = await tencentCloudChat.accept({
            inviteID: inviteID,
            data: "123",
        })
```

<a id = "reject"></a>

#### reject

接收方拒绝邀请

##### params

```
{
    msgID:string,
}
```

##### callback

```js
success:
// 只列出data里的字段
{
    code:0, 
    data:“”,
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

##### 代码示例

```js
let data = await tencentCloudChat.reject({
            inviteID: inviteID,
            data: "123",
        })
```

<a id = "getSignalingInfo"></a>

#### getSignalingInfo

获取信令信息

##### params

```
{
    msgID:string,
}
```

##### callback

```js
success:
// 只列出data里的字段
{
    code:0, 
    data:, //V2TIMSignalingInfo
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

> 如果 invite 设置 onlineUserOnly 为 false，每次信令操作（包括 invite、cancel、accept、reject、timeout）都会产生一条自定义消息， 该消息会通过 V2TIMAdvancedMsgListener -> onRecvNewMessage 抛给用户，用户也可以通过历史消息拉取，如果需要根据信令信息做自定义化文本展示，可以调用下面接口获取信令信息。

参考：
<a href = "#V2TIMSignalingInfo">V2TIMSignalingInfo</a>

##### 代码示例

```js
let data = await tencentCloudChat.getSignalingInfo({
            msgID:"msgid"
        })
```

<a id = "addInvitedSignaling"></a>

#### addInvitedSignaling

添加邀请信令

> 如果添加的信令信息已存在，fail callback 会抛 ERR_SDK_SIGNALING_ALREADY_EXISTS 错误码。

##### params

```js
{
    info: //V2TIMSignalingInfo
}
```

参考：
<a href = "#V2TIMSignalingInfo">V2TIMSignalingInfo</a>

> 主要用于邀请者在被邀请者离线期间，发送了群聊邀请，被邀请者上线后将该信令同步给 SDK，从而正常使用信令功能。
> 当被邀请者点击离线推送提示，拉起 App 时：
> 
> 1. 如果被邀请者离线期间，邀请者发送的是 1V1 信令，SDK 可以自动同步邀请信令。邀请未超时，回调 onReceiveNewInvitation。
> 2. 如果被邀请者离线期间，邀请者发送的是群聊信令，不同 SDK 版本表现如下：
> 3. 6.7 以前的版本： SDK 无法自动同步邀请信令（信令本质上就是一条自定义消息，群离线消息在程序启动后无法自动同步）。 如果被邀请者需要处理该邀请信令，可以让邀请者在发起信令时，向每个被邀请者额外发送一条 C2C 离线推送消息，消息携带 >V2TIMSignalingInfo 信息。 被邀请者收到离线推送时通过 addInvitedSignaling 将 V2TIMSignalingInfo 信息告知SDK。
> 4. 6.7 及以后的版本： SDK 会自动同步最近 30 秒的消息。如果其中包含了未超时的邀请信令，回调onReceiveNewInvitation。您无需再调用本接口同步邀请信令。

##### callback

```js
success:
// 只列出data里的字段
{
    code:0, 
    data:"",
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

##### 代码示例

```js
let data = await tencentCloudChat.addInvitedSignaling({
            info:{
                inviteID:"inviteID",
                groupID:null,
                inviteeList:null,
                data:null,
                timeout:null,
                actionType:null,
            }
        })
```

### V2TIMConversationManager


<a id = "addConversationListener"></a>

#### addConversationListener

添加会话监听器

##### params
```js
let listener = new conversationListener({
    onSyncServerStart:function(data){}, //同步服务器会话开始，SDK 会在登录成功或者断网重连后自动同步服务器会话，您可以监听这个事件做一些 UI 进度展示操作。
    onSyncServerFinish:function(data){}, //同步服务器会话完成，如果会话有变更，会通过 onNewConversation | onConversationChanged 回调告知客户
    onSyncServerFailed:function(data){}, //同步服务器会话失败
    onNewConversation:function(data){}, //有新的会话（比如收到一个新同事发来的单聊消息、或者被拉入了一个新的群组中），可以根据会话的 lastMessage -> timestamp 重新对会话列表做排序
    onConversationChanged:function(data){}, //某些会话的关键信息发生变化（未读计数发生变化、最后一条消息被更新等等），可以根据会话的 lastMessage -> timestamp 重新对会话列表做排序
    onTotalUnreadMessageCountChanged:function(data){}, //全部会话未读总数变更的通知
    onUnreadMessageCountChangedByFilter:function(data){}, //根据 filter 过滤的未读消息总数变更通知（7.0 及以上版本支持）
    onConversationGroupCreated:function(data){}, //会话分组被创建
    onConversationGroupDeleted:function(data){}, //会话分组被删除
    onConversationGroupNameChanged:function(data){}, //会话分组名变更
    onConversationsAddedToGroup:function(data){}, //会话分组新增会话
    onConversationsDeletedFromGroup:function(data){}, //会话分组删除会话
})
```

##### callback

```js
success:
{
    method:"conversationListener",
    type:, 
    data:"",
    listenerUuid:"",
}

```

具体返回值参考 <a href = "#listener">EventListener</a>的<a href="#V2TIMConversationListener">V2TIMConversationListener</a>

##### 代码示例

```js
let listener = new conversationListener({
    onSyncServerStart:function(data){console.log(JSON.stringify(data))}
})
//添加会话监听
await tencentCloudChat.addConversationListener(listener)
```

<a id = "removeConversationListener"></a>

#### removeConversationListener

移除会话监听器

##### params

```js
let listener = new conversationListener({
    onSyncServerStart:function(data){}, //同步服务器会话开始，SDK 会在登录成功或者断网重连后自动同步服务器会话，您可以监听这个事件做一些 UI 进度展示操作。
    onSyncServerFinish:function(data){}, //同步服务器会话完成，如果会话有变更，会通过 onNewConversation | onConversationChanged 回调告知客户
    onSyncServerFailed:function(data){}, //同步服务器会话失败
    onNewConversation:function(data){}, //有新的会话（比如收到一个新同事发来的单聊消息、或者被拉入了一个新的群组中），可以根据会话的 lastMessage -> timestamp 重新对会话列表做排序
    onConversationChanged:function(data){}, //某些会话的关键信息发生变化（未读计数发生变化、最后一条消息被更新等等），可以根据会话的 lastMessage -> timestamp 重新对会话列表做排序
    onTotalUnreadMessageCountChanged:function(data){}, //全部会话未读总数变更的通知
    onUnreadMessageCountChangedByFilter:function(data){}, //根据 filter 过滤的未读消息总数变更通知（7.0 及以上版本支持）
    onConversationGroupCreated:function(data){}, //会话分组被创建
    onConversationGroupDeleted:function(data){}, //会话分组被删除
    onConversationGroupNameChanged:function(data){}, //会话分组名变更
    onConversationsAddedToGroup:function(data){}, //会话分组新增会话
    onConversationsDeletedFromGroup:function(data){}, //会话分组删除会话
})
```

##### callback

```js
success:
// 只列出data里的字段
{
    code:0, 
    data:"",
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

参考 <a href = "#listener">EventListener</a>的<a href="#V2TIMConversationListener">V2TIMConversationListener</a>
##### 代码示例

```js
let listener = new conversationListener({
    onSyncServerStart:function(data){console.log(JSON.stringify(data))}
})
//添加会话监听
await tencentCloudChat.addConversationListener(listener)
//删除会话监听
await tencentCloudChat.removeConversationListener(listener)
```

<a id = "getConversationList"></a>

#### getConversationList

获取会话列表

##### params

```js
{
    nextSeq:long,
    count:int
}
```

##### callback

```js
success:
// 只列出data里的字段
{
    code:0, 
    data:{
        nextSeq,
        isFinished,
        conversationList: // V2TIMConversation[]
    }
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

参考：
<a href = "#V2TIMConversation">V2TIMConversation</a>

##### 代码示例

```js
let data = await tencentCloudChat.getConversationList({nextSeq:"1",count:1})
```

<a id = "getConversationListByConversationIds"></a>

#### getConversationListByConversationIds

获取会话列表

##### params

```js
{
    conversationIDList:
}
```

##### callback

```js
success:
// 只列出data里的字段
{
    code:0, 
    data:{
        nextSeq,
        isFinished,
        conversationList: // V2TIMConversation[]
    }
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

参考：
<a href = "#V2TIMConversation">V2TIMConversation</a>

##### 代码示例

```js
let data = await tencentCloudChat.getConversationListByConversaionIds({conversationIDList:["1"]})
```

<a id = "getConversation"></a>

#### getConversation

获取单个会话

##### params

```js
{
    conversationID:string
}

```
>conversationID    会话唯一 ID，C2C 单聊组成方式为: String.format("c2c_%s", "userID")；群聊组成方式为: String.format("group_%s", "groupID")
##### callback

```js
success:
// 只列出data里的字段
{
    code:0, 
    data:, //V2TIMConversation 
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

参考：
<a href = "#V2TIMConversation">V2TIMConversation</a>

##### 代码示例

```js
let data = await tencentCloudChat.getConversation({conversationID:"conversationid"})
```

<a id = "getConversationListByFilter"></a>

#### getConversationListByFilter

获取会话列表高级接口

##### params

```js
{
    filter:{
        groupName:
        conversationType: //选填
        nextSeq://选填
        count:
        markType: //选填，V2TIM_ConversationMarkType
    }
}
```

##### callback

```js
success:
// 只列出data里的字段
{
    code:0, 
    data:{
        nextSeq,
        isFinished,
        conversationList: // V2TIMConversation[]
    }, 
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

参考：
<a href = "#V2TIMConversation">V2TIMConversation</a>
<a href = "#V2TIM_ConversationMarkType">V2TIM_ConversationMarkType</a>

##### 代码示例

```js
let data = await tencentCloudChat.getConversationListByFilter({filter:{groupName:"name",count:null}})
```

<a id = "deleteConversation"></a>

#### deleteConversation

删除会话

##### params

```
{
    conversationID:string
}
```

##### callback

```js
success:
// 只列出data里的字段
{
    code:0, 
    data:"",
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

##### 代码示例

```js
let data = await tencentCloudChat.deleteConversation({conversationID:"conversationid"})
```

<a id = "setConversationDraft"></a>

#### setConversationDraft

设置会话草稿

##### params

```
{
    conversationID:string
    draftText:string
}
```

##### callback

```js
success:
// 只列出data里的字段
{
    code:0, 
    data:"",
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

##### 代码示例

```js
let data = await tencentCloudChat.setConversationDraft({conversationID:"1",draftText:"draftText"})
```

<a id = "setConversationCustomData"></a>

#### setConversationCustomData

设置会话自定义数据（从 6.5 版本开始支持

##### params

```
{
    conversationIDList:string[]
    customData:string
}
```

##### callback

```js
success:
// 只列出data里的字段
{
    code:0, 
    data:[{
        conversationID,
        resultCode,
        resultInfo
    },{}], 
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

##### 代码示例

```js
let data = await tencentCloudChat.setConversationCustomData({conversationIDList:["1"],customData:"customdata"})
```

<a id = "pinConversation"></a>

#### pinConversation

设置会话置顶（5.3.425 及以上版本支持

##### params

```
{
    conversationID:string
    isPinned:boolean
}
```

##### callback

```js
success:
// 只列出data里的字段
{
    code:0, 
    data:"",
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

##### 代码示例

```js
let data = await tencentCloudChat.pinConversation({conversationID:"conversationid",isPinned:true})
```

<a id = "markConversation"></a>

#### markConversation

标记会话（从 6.5 版本开始支持，需要您购买旗舰版套餐）

##### params

```js
{
    conversationIDList:string[],
    enableMark:boolean,
    markType:long
}
```

##### callback

```js
success:
// 只列出data里的字段
{
    code:0, 
    data:[{
        conversationID,
        resultCode,
        resultInfo
    },{}], 
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

##### 代码示例

```js
let data = await tencentCloudChat.markConversation({conversationIDList:["1"],enableMark:true,markType:1})
```

<a id = "getTotalUnreadMessageCount"></a>

#### getTotalUnreadMessageCount

获取会话未读总数（5.3.425 及以上版本支持）

##### params

```js
无
```

##### callback

```js
success:
// 只列出data里的字段
{
    code:0, 
    data:, //数字，unread message count
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

##### 代码示例

```js
let data = await tencentCloudChat.getTotalUnreadMessageCount({})
```

<a id = "createConversationGroup"></a>

#### createConversationGroup

创建会话分组

##### params

```js
{
    groupName:string,
    conversationIDList:string[]
}
```

##### callback

```js
success:
// 只列出data里的字段
{
    code:0, 
    data:[{
        conversationID,
        resultCode,
        resultInfo
    },{}],
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

##### 代码示例

```js
let data = await tencentCloudChat.createConversationGroup({conversationIDList:["conversationid"],groupName:"groupname"})
```

<a id = "getConversationGroupList"></a>

#### getConversationGroupList

获取会话分组列表

##### params

```js
无
```

##### callback

```js
success:
// 只列出data里的字段
{
    code:0, 
    data:[],//conversation id 列表
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

##### 代码示例

```js
let data = await tencentCloudChat.getConversationGroupList({})
```

<a id = "deleteConversationGroup"></a>

#### deleteConversationGroup

删除会话分组

##### params

```js
{
    groupName:string
}
```

##### callback

```js
success:
// 只列出data里的字段
{
    code:0, 
    data:"",
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

##### 代码示例

```js
let data = await tencentCloudChat.deleteConversationGroup({groupName:"groupname"})
```

<a id = "renameConversationGroup"></a>

#### renameConversationGroup

重命名会话分组

##### params

```js
{
    oldName:string,
    newName:string
}
```

##### callback

```js
success:
// 只列出data里的字段
{
    code:0, 
    data:"",
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

##### 代码示例

```js
let data = await tencentCloudChat.renameConversationGroup({oldName:"oldName",newName:"newName"})
```

<a id = "addConversationsToGroup"></a>

#### addConversationsToGroup

添加会话到一个会话分组

##### params

```js
{
    groupName:string,
    conversationIDList:string[]
}
```

###### callback

```js
success:
// 只列出data里的字段
{
    code:0, 
    data:[{
        conversationID,
        resultCode,
        resultInfo
    },{}], 
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

##### 代码示例

```js
let data = await tencentCloudChat.addConversationsToGroup({groupName:"groupName",conversationIDList:["conversationid"]})
```

<a id = "deleteConversationsFromGroup"></a>

#### deleteConversationsFromGroup

从一个会话分组中删除会话

##### params

```js
{
    groupName:string,
    conversationIDList:string[]
}
```

##### callback

```js
success:
// 只列出data里的字段
{
    code:0, 
    data:[{
        conversationID,
        resultCode,
        resultInfo
    },{}], 
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```
##### 代码示例
```js
let data = await tencentCloudChat.deleteConversationsFromGroup({groupName:"groupname",conversationIDList:["conversationid"]})
```
### V2TIMFriendshipManager

<a id = "addFriendListener"></a>

#### addFriendListener

添加关系链监听器

###### params

```js
let listener = new friendshipListener({
    onFriendApplicationListAdded:function(data){}, //好友申请新增通知
    onFriendApplicationListDeleted:function(data){}, //好友申请删除通知
    onFriendApplicationListRead:function(data){}, //好友申请已读通知
    onFriendListAdded:function(data){}, //好友新增通知
    onFriendListDeleted:function(data){}, //好友删除通知
    onBlackListAdd:function(data){}, //黑名单新增通知
    onBlackListDeleted:function(data){}, //黑名单删除通知
    onFriendInfoChanged:function(data){}, //好友资料更新通知
})
```

###### callback

```js
success:
{
    method:"friendListener",
    type:"", 
    data:"",
    listenerUuid:"",
}
```

参考 <a href = "#listener">EventListener</a>的<a href ="#V2TIMFriendshipListener">V2TIMFriendshipListener</a>

##### 代码示例

```js
let listener = new friendshipListener({
    onFriendApplicationListAdded:function(data){console.log(JSON.stringify(data))}
})
//添加好友监听
await tencentCloudChat.addFriendListener(listener)
```

<a id = "removeFriendListener"></a>

#### removeFriendListener

移除关系链监听器

##### params

```js
let listener = new friendshipListener({
    onFriendApplicationListAdded:function(data){}, //好友申请新增通知
    onFriendApplicationListDeleted:function(data){}, //好友申请删除通知
    onFriendApplicationListRead:function(data){}, //好友申请已读通知
    onFriendListAdded:function(data){}, //好友新增通知
    onFriendListDeleted:function(data){}, //好友删除通知
    onBlackListAdd:function(data){}, //黑名单新增通知
    onBlackListDeleted:function(data){}, //黑名单删除通知
    onFriendInfoChanged:function(data){}, //好友资料更新通知
})
```

##### callback

```js
success:
// 只列出data里的字段
{
    code:0, 
    data:“”,
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

参考 <a href = "#listener">EventListener</a>的<a href ="#V2TIMFriendshipListener">V2TIMFriendshipListener</a>

##### 代码示例

```js
let listener = new friendshipListener({
    onFriendApplicationListAdded:function(data){console.log(JSON.stringify(data))}
})
//添加好友监听
await tencentCloudChat.addFriendListener(listener)
//删除好友监听
await tencentCloudChat.removeFriendListener(listener)
```

<a id = "getFriendList"></a>

#### getFriendList

获取好友列表

##### params

```js
无
```

##### callback

```js
success:
// 只列出data里的字段
{
    code:0, 
    data: //V2TIMFriendInfo[]
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

参考：
<a href = "#V2TIMFriendInfo">V2TIMFriendInfo</a>

##### 代码示例

```js
let data = await tencentCloudChat.getFriendList({})
```

<a id = "getFriendsInfo"></a>

#### getFriendsInfo

获取指定好友资料

##### params

```js
{
    userIDList:string[]
}
```

##### callback

```js
success:
// 只列出data里的字段
{
    code:0, 
    data:[{
        resultCode:
        resultInfo:
        relation: //V2TIM_FriendRelationType
        friendInfo: //V2TIMFriendInfo,好友个人资料，如果不是好友，除了 userID 字段有值，其他字段都为空
    },{}],
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

参考：
<a href = "#V2TIMFriendInfo">V2TIMFriendInfo</a>
<a href = "#V2TIM_FriendRelationType">V2TIM_FriendRelationType</a>
##### 代码示例

```js
let data = await tencentCloudChat.getFriendsInfo({userIDList:["userid"]})
```

<a id = "setFriendInfo"></a>

#### setFriendInfo

设置指定好友资料

##### params

```js
{
    userID: //字符串
    friendRemark: //选填，字符串
    friendCustomInfo://选填，map<string,string>
}
```

##### callback

```js
success:
// 只列出data里的字段
{
    code:0, 
    data:"",
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

##### 代码示例

```js
let data = await tencentCloudChat.setFriendInfo({userID:"userID",friendRemark:"friendRemark"})
```

<a id = "searchFriends"></a>

#### searchFriends

搜索好友（5.4.666 及以上版本支持

##### params

```js
{
    searchParam:{
        keywordList: //搜索关键字列表，关键字列表最多支持5个。
        isSearchNickName: //设置是否搜索昵称
        isSearchUserID: //设置是否搜索 userID
        isSearchRemark: //设置是否搜索备注
    }
}
```

##### callback

```js
success:
// 只列出data里的字段
{
    code:0, 
    data:[{
        resultCode:
        resultInfo:
        relation: //V2TIM_FriendRelationType
        friendInfo: //V2TIMFriendInfo,好友个人资料，如果不是好友，除了 userID 字段有值，其他字段都为空
    },{}],
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

参考：
<a href = "#V2TIMFriendInfo">V2TIMFriendInfo</a>
<a href = "#V2TIM_FriendRelationType">V2TIM_FriendRelationType</a>

##### 代码示例

```js
let data = await tencentCloudChat.searchFriends({searchParam:{keywordList:["keyword"],isSearchNickName:true,isSearchUserID:false,isSearchRemark:false}})
```

<a id = "addFriend"></a>

#### addFriend

添加好友

##### params

```js
{
    userID:
    addType: //V2TIM_FriendAddType
    remark: //选填，预设置好友备注
    addWording: //选填，字符串，设置添加简述
    addSource: //选填，字符串，设置添加来源
}
```

参考：
<a href = "#V2TIM_FriendAddType">V2TIM_FriendAddType</a>

##### callback

```js
success:
// 只列出data里的字段
{
    code:0, 
    data:{
        userID:
        resultCode:
        resultInfo:
    },
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

##### 代码示例

```js
let data = await tencentCloudChat.addFriend({userID:"userid",addType:0})
```

<a id = "deleteFromFriendList"></a>

#### deleteFromFriendList

删除好友

##### params

```js
{
    userIDList:string[],
    deleteType:int //V2TIM_FriendAddType
}
```

参考：
<a href = "#V2TIM_FriendAddType">V2TIM_FriendAddType</a>

##### callback

```js
success:
// 只列出data里的字段
{
    code:0, 
    data:{
        userID:
        resultCode:
        resultInfo:
    },
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

##### 代码示例

```js
let data = await tencentCloudChat.deleteFromFriendList({userIDList:["userid"],deleteType:0})
```

<a id = "checkFriend"></a>

#### checkFriend

检查指定用户的好友关系

##### params

```js
{
    userIDList:string[],
    checkType:int //V2TIM_FriendAddType
}
```

> checkType 的使用需要注意：
> 
> - checkType 如果传入 V2TIM_FRIEND_TYPE_SINGLE，结果返回：V2TIM_FRIEND_RELATION_TYPE_NONE、V2TIM_FRIEND_RELATION_TYPE_IN_MY_FRIEND_LIST 两种情况
> - checkType 如果传入 V2TIM_FRIEND_TYPE_BOTH，结果返回：V2TIM_FRIEND_RELATION_TYPE_NONE、   V2TIM_FRIEND_RELATION_TYPE_IN_MY_FRIEND_LIST、 V2TIM_FRIEND_RELATION_TYPE_IN_OTHER_FRIEND_LIST、V2TIM_FRIEND_RELATION_TYPE_BOTH_WAY 四种情况

##### callback

```js
success:
// 只列出data里的字段
{
    code:0, 
    data:[{
        userID:
        resultCode:
        resultInfo:
        resultType: // V2TIM_FriendRelationType
    },{}],
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

参考：
<a href = "#V2TIM_FriendRelationType">V2TIM_FriendRelationType</a>

##### 代码示例

```js
let data = await tencentCloudChat.checkFriend({userIDList:["userid"],checkType:0})
```

<a id = "getFriendApplicationList"></a>

#### getFriendApplicationList

获取好友申请列表

> 好友申请列表包括发起的好友申请和收到的好友申请。
> 最多支持100个。

##### params

```js
无
```

##### callback

```js
success:
// 只列出data里的字段
{
    code:0, 
    data:{
        unreadCount:
        friendApplicationList: //V2TIMFriendApplication[]
    },
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

参考：
<a href = "#V2TIMFriendApplication">V2TIMFriendApplication</a>
##### 代码示例

```js
let data = await tencentCloudChat.getFriendApplicationList({})
```

<a id = "acceptFriendApplication"></a>

#### acceptFriendApplication

同意好友申请

##### params

```js
{
    responseType:int, //V2TIM_FriendAccept
    userID:string,
}
```

参考：
<a href = "#V2TIMFriendApplication">V2TIMFriendApplication</a>

##### callback

```js
success:
// 只列出data里的字段
{
    code:0, 
    data:{
        userID:
        resultCode:
        resultInfo:
    },
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

##### 代码示例

```js
let data = await tencentCloudChat.acceptFriendApplication({userID:"userid",responseType:0})
```

<a id = "refuseFriendApplication"></a>

#### refuseFriendApplication

拒绝好友申请

##### params

```js
{
    userID:string,
}
```

##### callback

```js
success:
// 只列出data里的字段
{
    code:0, 
    data:{
        userID:
        resultCode:
        resultInfo:
    },
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

##### 代码示例

```js
let data = await tencentCloudChat.refuseFriendApplication({userID:"userid"})
```

<a id = "deleteFriendApplication"></a>

#### deleteFriendApplication

删除好友申请

##### params

```js
{
    userID:string,
}
```

##### callback

```js
success:
// 只列出data里的字段
{
    code:0, 
    data:"",
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

##### 代码示例

```js
let data = await tencentCloudChat.deleteFriendApplication({userID:"userid"})
```

<a id = "setFriendApplicationRead"></a>

#### setFriendApplicationRead

设置好友申请已读

##### params

```js
无
```

##### callback

```js
success:
// 只列出data里的字段
{
    code:0, 
    data:"",
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

##### 代码示例

```js
let data = await tencentCloudChat.setFriendApplicationRead({})
```

<a id = "addToBlackList"></a>

#### addToBlackList

设置好友申请已读

##### params

```js
{
    userIDList:string[]
}
```

##### callback

```js
success:
// 只列出data里的字段
{
    code:0, 
    data:{
        userID:
        resultCode:
        resultInfo:
    },
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

##### 代码示例

```js
let data = await tencentCloudChat.addToBlackList({userIDList:["userid"]})
```

<a id = "deleteFromBlackList"></a>

#### deleteFromBlackList

把用户从黑名单中删除

##### params

```js
{
    userIDList:string[]
}
```

##### callback

```js
success:
// 只列出data里的字段
{
    code:0, 
    data:{
        userID:
        resultCode:
        resultInfo:
    },
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

##### 代码示例

```js
let data = await tencentCloudChat.deleteFromBlackList({userIDList:["userid"]})
```

<a id = "getBlackList"></a>

#### getBlackList

获取黑名单列表

##### params

```js
无
```

##### callback

```js
success:
// 只列出data里的字段
{
    code:0, 
    data:, // V2TIMFriendInfo[]
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

参考：
<a href = "#V2TIMFriendInfo">V2TIMFriendInfo</a>

##### 代码示例

```js
let data = await tencentCloudChat.getBlackList({})
```

<a id = "createFriendGroup"></a>

#### createFriendGroup

新建好友分组

##### params

```js
{
    groupName:string,
    userIDList:string[]
}
```

##### callback

```js
success:
// 只列出data里的字段
{
    code:0, 
    data: //V2TIMFriendInfo[]
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

参考：
<a href = "#V2TIMFriendInfo">V2TIMFriendInfo</a>
##### 代码示例

```js
let data = await tencentCloudChat.createFriendGroup({userIDList:["userid"],groupName:"groupName"})
```

<a id = "getFriendGroups"></a>

#### getFriendGroups

获取分组信息

##### params

```js
{
    groupNameList:string[]
}
```

##### callback

```js
success:
// 只列出data里的字段
{
    code:0, 
    data:[{
        name:
        friendCount:
        friendIDList:
    },{}],
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

##### 代码示例

```js
let data = await tencentCloudChat.getFriendGroups({groupNameList:["groupName"]})
```

<a id = "deleteFriendGroup"></a>

#### deleteFriendGroup

删除好友分组

##### params

```js
{
    groupNameList:string[]
}
```

##### callback

```js
success:
// 只列出data里的字段
{
    code:0, 
    data:"",
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

##### 代码示例

```js
let data = await tencentCloudChat.deleteFriendGroup({groupNameList:["groupName"]})
```

<a id = "renameFriendGroup"></a>

#### renameFriendGroup

修改好友分组的名称

##### params

```js
{
    oldName:string, //必填
    newName:string  //必填
}
```

##### callback

```js
success:
// 只列出data里的字段
{
    code:0, 
    data:"",
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

##### 代码示例

```js
let data = await tencentCloudChat.renameFriendGroup({oldName:"oldName",newName:"newName"})
```

<a id = "addFriendsToFriendGroup"></a>

#### addFriendsToFriendGroup

添加好友到一个好友分组

##### params

```js
{
    groupName:string,   //必填
    userIDList:string[] //必填
}
```

##### callback

```js
success:
// 只列出data里的字段
{
    code:0, 
    data:[{
        userID:
        resultCode: //结果码
        resultInfo: //结果信息
    },{}],
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

##### 代码示例

```js
let data = await tencentCloudChat.addFriendsToFriendGroup({groupNameList:["groupName"],userIDList:["userid"]})
```

<a id = "deleteFriendsFromFriendGroup"></a>

#### deleteFriendsFromFriendGroup

从好友分组中删除好友

##### params

```js
{
    groupName:string,   //必填
    userIDList:string[] //必填
}
```

##### callback

```js
success:
// 只列出data里的字段
{
    code:0, 
    data:[{
        userID:
        resultCode:
        resultInfo:
    },{}],
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```
##### 代码示例

```js
let data = await tencentCloudChat.deleteFriendsFromFriendGroup({groupNameList:["groupName"],userIDList:["userid"]})
```
### V2TIMOfflinePushManager



<a id = "setOfflinePushConfig"></a>

#### setOfflinePushConfig

设置离线推送配置信息

##### params

```js
{
    businessID:long,    //必填，IM 控制台证书 ID
    token:string    //必填，注册应用到厂商平台时获取的 token
}
```
获取 IM 控制台证书ID 请参考 [离线推送iOS](https://cloud.tencent.com/document/product/269/9154)，[安卓离线推送](https://cloud.tencent.com/document/product/269/75428)
##### callback

```js
success:
// 只列出data里的字段
{
    code:0, 
    data:"",
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

##### 代码示例

```js
let data = await tencentCloudChat.setOfflinePushConfig({businessID:0,token:"token"})
```

<a id = "doBackground"></a>

#### doBackground

APP 检测到应用退后台时可以调用此接口，可以用作桌面应用角标的初始化未读数量。

##### params

```js
{
    unreadCount:int,    //必填
}
```

##### callback

```js
success:
// 只列出data里的字段
{
    code:0, 
    data:"",
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

##### 代码示例

```js
let data = await tencentCloudChat.doBackground({unreadCount:0})
```

<a id = "doForeground"></a>

#### doForeground

APP 检测到应用进前台时可以调用此接口

##### params

```js
{
    unreadCount:int,
}
```

##### callback

```js
success:
// 只列出data里的字段
{
    code:0, 
    data:"",
    desc:"",
}
error:
{
    code:, //错误码
    data:"",
    desc:"",//错误描述
}
```

##### 代码示例

```js
var tencentCloudChatSDK = api.require("tencentCloudChatSDK")
 tencentCloudChatSDK.doForeground({unreadCount:0})
```

<a id = "enum"></a>

## enum

<a id = "V2TIM_Log"></a>

### V2TIM_Log

```js
{
    V2TIM_LOG_NONE = 0, //不输出任何 sdk log
    V2TIM_LOG_DEBUG = 3, //输出 DEBUG，INFO，WARNING，ERROR 级别的 log
    V2TIM_LOG_INFO = 4, //输出 INFO，WARNING，ERROR 级别的 log
    V2TIM_LOG_WARN = 5, //输出 WARNING，ERROR 级别的 log
    V2TIM_LOG_ERROR = 6,//输出 ERROR 级别的 log
}
```

<a id = "V2TIM_Gender"></a>

### V2TIM_Gender

用户性别

```js
{
    V2TIM_GENDER_UNKNOWN = 0 //未知
    V2TIM_GENDER_MALE = 1 //男
    V2TIM_GENDER_FEMALE = 2 // 女
}
```

<a id = "V2TIM_Allowtype"></a>

### V2TIM_Allowtype

好友验证方式

```js
{
    V2TIM_FRIEND_ALLOW_ANY = 0 //拒绝所有
    V2TIM_FRIEND_DENY_ANY = 1   //接受所有
    V2TIM_FRIEND_NEED_CONFIRM = 2   //需要验证
}
```

<a id = "V2TIM_UserStatus"></a>

### V2TIM_UserStatus

用户状态

```js
{
    V2TIM_USER_STATUS_UNKNOWN = 0 //未知状态
    V2TIM_USER_STATUS_ONLINE = 1 //在线状态
    V2TIM_USER_STATUS_OFFLINE = 2 //离线状态
    V2TIM_USER_STATUS_UNLOGINED = 3 //未登录（如主动调用 logout 接口，或者账号注册后还未登录）
}
```

<a id = "V2TIM_Status"></a>

### V2TIM_Status

登录状态

```js
{
    V2TIM_STATUS_LOGINED = 1 //已登录
    V2TIM_STATUS_LOGINING = 2 //登录中
    V2TIM_STATUS_LOGOUT = 3 //无登录
}
```

<a id = "V2TIM_MsgStatus"></a>

### V2TIM_MsgStatus

消息状态

```js
{
    V2TIM_MSG_STATUS_SENDING = 1 //消息发送中
    V2TIM_MSG_STATUS_SEND_SUCC = 2 //消息发送成功
    V2TIM_MSG_STATUS_SEND_FAIL = 3 //消息发送失败
    V2TIM_MSG_STATUS_HAS_DELETED = 4 //消息被删除
    V2TIM_MSG_STATUS_LOCAL_IMPORTED = 5 //导入到本地的消息
    V2TIM_MSG_STATUS_LOCAL_REVOKED = 6 //被撤销的消息

}
```

<a id = "V2TIM_ElemType"></a>

### V2TIM_ElemType

消息类型

```js
{
    V2TIM_ELEM_TYPE_TEXT = 1    //文本消息
    V2TIM_ELEM_TYPE_CUSTOM = 2  //自定义消息
    V2TIM_ELEM_TYPE_IMAGE = 3   //图片消息
    V2TIM_ELEM_TYPE_SOUND = 4   //语音消息
    V2TIM_ELEM_TYPE_VIDEO = 5   //视频消息
    V2TIM_ELEM_TYPE_FILE = 6    //文件消息
    V2TIM_ELEM_TYPE_LOCATION = 7   //地理位置消息
    V2TIM_ELEM_TYPE_FACE = 8    //表情消息
    V2TIM_ELEM_TYPE_GROUP_TIPS = 9  //群提示消息
    V2TIM_ELEM_TYPE_MERGER = 10 //合并消息
}
```

<a id = "V2TIM_ImageType"></a>

### V2TIM_ImageType

```js
{
    V2TIM_IMAGE_TYPE_ORIGIN = 0 //原图
    V2TIM_IMAGE_TYPE_THUMB = 1 //缩略图
    V2TIM_IMAGE_TYPE_LARGE = 2 //大图
}
```

<a id = "V2TIM_GroupTipsType"></a>

### V2TIM_GroupTipsType

```js
{
    GROUP_TIPS_TYPE_INVALID = 0 //非法
    V2TIM_GROUP_TIPS_TYPE_JOIN = 1 // 主动入群（memberList 加入群组，非 Work 群有效）
    V2TIM_GROUP_TIPS_TYPE_INVITE = 2 //被邀请入群（opMember 邀请 memberList 入群，Work 群有效）
    V2TIM_GROUP_TIPS_TYPE_QUIT = 3 // 退出群组
    V2TIM_GROUP_TIPS_TYPE_KICKED = 4 //踢出群 (opMember 把 memberList 踢出群组)
    V2TIM_GROUP_TIPS_TYPE_SET_ADMIN = 5 //设置管理员 (opMember 把 memberList 设置为管理员)
    V2TIM_GROUP_TIPS_TYPE_CANCEL_ADMIN = 6 //取消管理员 (opMember 取消 memberList 管理员身份)
    V2TIM_GROUP_TIPS_TYPE_GROUP_INFO_CHANGE = 7 //群资料变更 (opMember 修改群资料：groupName & introduction & notification & faceUrl & owner & custom)
    V2TIM_GROUP_TIPS_TYPE_MEMBER_INFO_CHANGE = 8 //群成员资料变更 (opMember 修改群成员资料：muteTime)
}
```

<a id = "V2TIM_At"></a>

### V2TIM_At

```js
{
    TIM_AT_UNKNOWN = 0 //错误状态
    TIM_AT_ME = 1 //@ 我
    TIM_AT_ALL = 2 //@ 群里所有人
    TIM_AT_ALL_AT_ME = 3 //@ 群里所有人并且单独 @ 我
}
```

<a id = "V2TIM_GroupType"></a>

### V2TIM_GroupType

```js
{
    V2TIM_GROUP_TYPE_WORK = "Work" //工作群，成员上限 200 人，不支持由用户主动加入，需要他人邀请入群，适合用于类似微信中随意组建的工作群（对应老版本的 Private 群）。
    V2TIM_GROUP_TYPE_PUBLIC = "Public" //公开群，成员上限 2000 人，任何人都可以申请加群，但加群需群主或管理员审批，适合用于类似 QQ 中由群主管理的兴趣群。
    V2TIM_GROUP_TYPE_MEETING = "Meeting" //会议群，成员上限 6000 人，任何人都可以自由进出，且加群无需被审批，适合用于视频会议和在线培训等场景（对应老版本的 ChatRoom 群）。
    V2TIM_GROUP_TYPE_COMMUNITY = "Community" //社群，成员上限 100000 人，任何人都可以自由进出，且加群无需被审批，适合用于知识分享和游戏交流等超大社区群聊场景。5.8 版本开始支持，需要您购买旗舰版套餐。
    V2TIM_GROUP_TYPE_AVCHATROOM = "AVChatRoom" //直播群，人数无上限，任何人都可以自由进出，消息吞吐量大，适合用作直播场景中的高并发弹幕聊天室。
}
```

<a id="V2TIM_GroupInfoChangeType"></a>

### V2TIM_GroupInfoChangeType

```js
{
    V2TIM_GROUP_INFO_INVALID = 0 //非法值
    V2TIM_GROUP_INFO_CHANGE_TYPE_NAME = 1 //群名修改
    V2TIM_GROUP_INFO_CHANGE_TYPE_INTRODUCTION = 2 //群简介修改
    V2TIM_GROUP_INFO_CHANGE_TYPE_NOTIFICATION = 3 // 群公告修改
    V2TIM_GROUP_INFO_CHANGE_TYPE_FACE_URL = 4 //群头像修改
    V2TIM_GROUP_INFO_CHANGE_TYPE_OWNER = 5 // 群主变更
    V2TIM_GROUP_INFO_CHANGE_TYPE_CUSTOM = 6 // 群自定义字段变更
    V2TIM_GROUP_INFO_CHANGE_TYPE_SHUT_UP_ALL = 8//全员禁言字段变更,需要后台配置,通过接口 getBoolValue 获取变更后的值
    V2TIM_GROUP_INFO_CHANGE_TYPE_RECEIVE_MESSAGE_OPT = 10 //消息接收选项变更,通过接口 getIntValue 获取变更后的值
    V2TIM_GROUP_INFO_CHANGE_TYPE_GROUP_ADD_OPT = 11 //加群选项变更,通过接口 getIntValue 获取变更后的值
}
```

<a id = "V2TIM_Priority"></a>

### V2TIM_Priority

```js
{
    V2TIM_PRIORITY_DEFAULT = 0 //默认为普通优先级
    V2TIM_PRIORITY_HIGH = 1 //高优先级，一般用于礼物等重要消息
    V2TIM_PRIORITY_NORMAL = 2 //普通优先级，一般用于普通消息
    V2TIM_PRIORITY_LOW = 3 //低优先级，一般用于点赞消息

}
```

<a id = "V2TIM_GroupAdd"></a>

### V2TIM_GroupAdd

```js
{
    V2TIM_GROUP_ADD_FORBID = 0 //禁止加群
    V2TIM_GROUP_ADD_AUTH = 1 //需要管理员审批
    V2TIM_GROUP_ADD_ANY = 2 //任何人可以加入
}
```

<a id = "V2TIM_GroupMemberRole"></a>

### V2TIM_GroupMemberRole

```js
{
    V2TIM_GROUP_MEMBER_ROLE_MEMBER = 200 // 群成员
    V2TIM_GROUP_MEMBER_ROLE_ADMIN = 300 //群管理员
    V2TIM_GROUP_MEMBER_ROLE_OWNER = 400 // 群主
}
```

<a id = "V2TIM_MessageOpt"></a>

### V2TIM_MessageOpt

```js
{
    V2TIM_RECEIVE_MESSAGE   //在线正常接收消息，离线时会有厂商的离线推送通知 
    V2TIM_NOT_RECEIVE_MESSAGE   //不会接收到消
    V2TIM_RECEIVE_NOT_NOTIFY_MESSAGE    //在线正常接收消息，离线不会有推送通知
}
```

<a id = "V2TIM_GetType"></a>

### V2TIM_GetType

```js
{
    V2TIM_GET_CLOUD_OLDER_MSG = 1 //获取云端更老的消息
    V2TIM_GET_CLOUD_NEWER_MSG = 2 //获取云端更新的消息
    V2TIM_GET_LOCAL_OLDER_MSG = 3 //获取本地更老的消息
    V2TIM_GET_LOCAL_NEWER_MSG = 4 //获取本地更新的消息

}
```

<a id = "V2TIM_KeywordListMatchType"></a>

### V2TIM_KeywordListMatchType

```js
{
    V2TIM_KEYWORD_LIST_MATCH_TYPE_OR = 0    //“或”关系搜索
    V2TIM_KEYWORD_LIST_MATCH_TYPE_AND = 1   //“与”关系搜索
}
```

<a id = "V2TIM_GroupMemberFilter"></a>

### V2TIM_GroupMemberFilter

```js
{
    V2TIM_GROUP_MEMBER_FILTER_ALL = 0 //所有类型
    V2TIM_GROUP_MEMBER_FILTER_OWNER = 1 //群主
    V2TIM_GROUP_MEMBER_FILTER_ADMIN = 2 //群管理员
    V2TIM_GROUP_MEMBER_FILTER_COMMON = 3 //普通群成员
}
```

<a id = "V2TIM_GroupMemberOperationResult"></a>

### V2TIM_GroupMemberOperationResult

```js
{
    OPERATION_RESULT_FAIL = 0   //失败
    OPERATION_RESULT_SUCC = 1   //成功
    OPERATION_RESULT_INVALID = 2 //无效操作，加群时已经是群成员 或者 移除群组时不在群内
    OPERATION_RESULT_PENDING = 3 //等待处理，邀请入群时等待对方处理
    OPERATION_RESULT_OVERLIMIT = 4 //操作失败，创建群指定初始群成员列表或邀请入群时，被邀请者加入的群总数超限
}
```

<a id = "V2TIM_GroupApplicationType"></a>

### V2TIM_GroupApplicationType

```js
{
    V2TIM_GROUP_APPLICATION_GET_TYPE_JOIN = 0 //申请入群
    V2TIM_GROUP_APPLICATION_GET_TYPE_INVITE = 1 //被邀请入群
}
```

<a id = "V2TIM_GroupApplicationHandleStatus"></a>

### V2TIM_GroupApplicationHandleStatus

```js
{
    V2TIM_GROUP_APPLICATION_HANDLE_STATUS_UNHANDLED = 0 //未处理
    V2TIM_GROUP_APPLICATION_HANDLE_STATUS_HANDLED_BY_OTHER = 1 //被他人处理
    V2TIM_GROUP_APPLICATION_HANDLE_STATUS_HANDLED_BY_SELF = 2 //自己已处理
}
```

<a id = "V2TIM_GroupApplicationHandleResult"></a>

### V2TIM_GroupApplicationHandleResult

```js
{
    V2TIM_GROUP_APPLICATION_HANDLE_RESULT_REFUSE = 0 //拒绝申请
    V2TIM_GROUP_APPLICATION_HANDLE_RESULT_AGREE = 1 //同意申请
}
```

<a id = "V2TIM_SignalingActionType"></a>

### V2TIM_SignalingActionType

```js
{
    SIGNALING_ACTION_TYPE_UNKNOWN = 0 //未定义
    SIGNALING_ACTION_TYPE_INVITE = 1 //邀请方发起邀请
    SIGNALING_ACTION_TYPE_CANCEL_INVITE = 2 //邀请方取消邀请
    SIGNALING_ACTION_TYPE_ACCEPT_INVITE = 3 //被邀请方接受邀请
    SIGNALING_ACTION_TYPE_REJECT_INVITE = 4 //被邀请方拒绝邀请
    SIGNALING_ACTION_TYPE_INVITE_TIMEOUT = 5 //邀请超时 

}
```

<a id = "V2TIM_ConversationType"></a>

### V2TIM_ConversationType

```js
{
    CONVERSATION_TYPE_INVALID = 0   //无效
    V2TIM_C2C = 1   //单聊
    V2TIM_GROUP = 2 //群聊
}
```

<a id = "V2TIM_ConversationMarkType"></a>

### V2TIM_ConversationMarkType

```js
{
    V2TIM_CONVERSATION_MARK_TYPE_STAR = 0x1 //会话标星
    V2TIM_CONVERSATION_MARK_TYPE_UNREAD = 0x1 << 1 //会话标记未读（重要会话）
    V2TIM_CONVERSATION_MARK_TYPE_FOLD = 0x1 << 2 //会话折叠
    V2TIM_CONVERSATION_MARK_TYPE_HIDE = 0x1 << 3 //会话隐藏
}
```

<a id="V2TIM_FriendApplication"></a>

### V2TIM_FriendApplication

```js
{
    V2TIM_FRIEND_APPLICATION_COME_IN = 1 //别人发给我的加好友请求
    V2TIM_FRIEND_APPLICATION_SEND_OUT = 2 //我发给别人的加好友请求
    V2TIM_FRIEND_APPLICATION_BOTH = 3 //别人发给我的和我发给别人的加好友请求。仅在拉取时有效
}
```

<a id = "V2TIM_FriendRelationType"></a>

### V2TIM_FriendRelationType

```js
{
    V2TIM_FRIEND_RELATION_TYPE_NONE = 0 //不是好友
    V2TIM_FRIEND_RELATION_TYPE_IN_MY_FRIEND_LIST = 1    //对方在我的好友列表中
    V2TIM_FRIEND_RELATION_TYPE_IN_OTHER_FRIEND_LIST = 2 //我在对方的好友列表中
    V2TIM_FRIEND_RELATION_TYPE_BOTH_WAY = 3 //互为好友
}
```

<a id="V2TIM_FriendAddType"></a>

### V2TIM_FriendAddType

```js
{
    V2TIM_FRIEND_TYPE_SINGLE = 1 //单向好友
    V2TIM_FRIEND_TYPE_BOTH = 2 //互为好友
}
```

<a id="V2TIM_FriendAccept"></a>

### V2TIM_FriendAccept

```js
{
    V2TIM_FRIEND_ACCEPT_AGREE = 0 //同意加好友（建立单向好友）
    V2TIM_FRIEND_ACCEPT_AGREE_AND_ADD = 1 //同意加好友并加对方为好友（建立双向好友）
}
```

<a id = "listener"></a>

## EventListener

以下为回调函数中的返回值。


<a id = "V2TIMSDKListener"></a>

### V2TIMSDKListener


#### onConnecting

SDK 正在连接到腾讯云服务器

```js
{
    methid:"sdkListener",
    type:"onConnecting",
    data:"",
    listenerUuid:""
}
```

#### onConnectSuccess

SDK 已经成功连接到腾讯云服务器

```js
{
    methid:"sdkListener",
    type:"onConnectSuccess",
    data:"",
    listenerUuid:""
}
```

#### onConnectFailed

SDK 连接腾讯云服务器失败

```js
{
    methid:"sdkListener",
    type:"onConnectFailed",
    data:{
        code: // 错误码
        err: // 错误描述
    },
    listenerUuid:""
}
```

#### onKickedOffline

当前用户被踢下线，此时可以 UI 提示用户，并再次调用 V2TIMManager 的 login() 函数重新登录

```js
{
    methid:"sdkListener",
    type:"onKickedOffline",
    data:"",
    listenerUuid:""
}
```

#### onUserSigExpired

在线时票据过期：此时您需要生成新的 userSig 并再次调用 V2TIMManager 的 login() 函数重新登录。

```js
{
    methid:"sdkListener",
    type:"onUserSigExpired",
    data:"",
    listenerUuid:""
}
```

#### onSelfInfoUpdated

登录用户的资料发生了更新

```js
{
    methid:"sdkListener",
    type:"onSelfInfoUpdated",
    data:{
        info: // V2TIMUserFullInfo,参考[关键类] V2TIMUserFullInfo
    },
    listenerUuid:""
}
```

参考：
<a href = "#V2TIMUserFullInfo">V2TIMUserFullInfo</a>

#### onUserStatusChanged

用户状态变更通知

> 注意：
>   收到通知的情况：
>     1. 订阅过的用户发生了状态变更（包括在线状态和自定义状态），会触发该回调
>     2. 在 IM 控制台打开了好友状态通知开关，即使未主动订阅，当好友状态发生变更时，也会触发该回调
>     3. 同一个账号多设备登录，当其中一台设备修改了自定义状态，所有设备都会收到该回调

```js
{
    methid:"sdkListener",
    type:"onUserStatusChanged",
    data:{
        data: {
            statusList: // V2TIMUserStatus 列表，参考[关键类] V2TIMUserStatus
        } 
    },
    listenerUuid:""
}
```

参考：
<a href = "#V2TIMUserStatus">V2TIMUserStatus</a>


<a id = "V2TIMGroupListener"></a>

### V2TIMGroupListener

群组监听器


#### onMemberEnter

有用户加入群（全员能够收到）

```js
{
    method: "groupListener",
    type:"onMemberEnter",
    data:{
        memberList: // [V2TIMGroupMemberInfo]（列表）,参考[关键类]V2TIMGroupMemberInfo
        groupID: //字符串，群 ID
    }
    listenerUuid:"",
}
```

参考：
<a href = "#V2TIMGroupMemberInfo">V2TIMGroupMemberInfo</a>

#### onMemberLeave

有用户离开群（全员能够收到）

```js
{
    method: "groupListener",
    type:"onMemberLeave",
    data:{
        member: // V2TIMGroupMemberInfo,离开的成员，参考[关键类]V2TIMGroupMemberInfo
        groupID: //字符串，群 ID
    }
    listenerUuid:"",
}
```

参考：
<a href = "#V2TIMGroupMemberInfo">V2TIMGroupMemberInfo</a>

#### onMemberInvited

某些人被拉入某群（全员能够收到）

```js
{
    method: "groupListener",
    type:"onMemberInvited",
    data:{
        opUser: // V2TIMGroupMemberInfo,处理人，参考[关键类]V2TIMGroupMemberInfo
        memberList: // [V2TIMGroupMemberInfo]（列表）,被拉进群成员,参考[关键类]V2TIMGroupMemberInfo
        groupID: //字符串，群 ID
    },
    listenerUuid:"",
}
```

参考：
<a href = "#V2TIMGroupMemberInfo">V2TIMGroupMemberInfo</a>

#### onMemberKicked

某些人被踢出某群（全员能够收到）

```js
{
    method: "groupListener",
    type:"onMemberKicked",
    data:{
        opUser: // V2TIMGroupMemberInfo,处理人，参考[关键类]V2TIMGroupMemberInfo
        memberList: // [V2TIMGroupMemberInfo]（列表）,被踢成员,参考[关键类]V2TIMGroupMemberInfo
        groupID: //字符串，群 ID
    },
    listenerUuid:"",
}
```

参考：
<a href = "#V2TIMGroupMemberInfo">V2TIMGroupMemberInfo</a>

#### onMemberInfoChanged

群成员信息被修改，仅支持禁言通知（全员能收到）。

> 会议群（Meeting）和直播群（AVChatRoom）默认无此回调，如需回调，请前往 控制台 (功能配置 -> 群组配置 -> 群系统通知配置 -> 群成员资料变更通知) 主动配置。

```js
{
    method: "groupListener",
    type:"onMemberInfoChanged",
    data:{
        groupMemberChangeInfoList: // [V2TIMGroupMemberChangeInfo]（列表）,被踢成员,参考[关键类]V2TIMGroupMemberChangeInfo
        groupID: //字符串，群 ID
    },
    listenerUuid:"",
}
```

参考：
<a href = "#V2TIMGroupMemberChangeInfo">V2TIMGroupMemberChangeInfo</a>

#### onGroupCreated

创建群（主要用于多端同步）

```js
{
    method: "groupListener",
    type:"onGroupCreated",
    data:{
        groupID: //字符串，群 ID
    },
    listenerUuid:"",
}
```

#### onGroupDismissed

群被解散了（全员能收到）

```js
{
    method: "groupListener",
    type:"onGroupDismissed",
    data:{
        opUser: // V2TIMGroupMemberInfo,    处理人，参考[关键类]V2TIMGroupMemberInfo
        groupID: //字符串，群 ID
    },
    listenerUuid:"",
}
```

参考：
<a href = "#V2TIMGroupMemberInfo">V2TIMGroupMemberInfo</a>

#### onGroupRecycled

群被回收（全员能收到）

```js
{
    method: "groupListener",
    type:"onGroupRecycled",
    data:{
        opUser: // V2TIMGroupMemberInfo,    处理人，参考[关键类]V2TIMGroupMemberInfo
        groupID: //字符串，群 ID
    },
    listenerUuid:"",
}
```

参考：
<a href = "#V2TIMGroupMemberInfo">V2TIMGroupMemberInfo</a>

#### onGroupInfoChanged

群信息被修改（全员能收到）

```js
{
    method: "groupListener",
    type:"onGroupInfoChanged",
    data:{
        groupChangeInfoList: // V2TIMGroupChangeInfo列表,修改的群信息，参考[关键类]V2TIMGroupChangeInfo
        groupID: //字符串，群 ID
    },
    listenerUuid:"",
}
```

参考：
<a href = "#V2TIMGroupChangeInfo">V2TIMGroupChangeInfo</a>

#### onReceiveJoinApplication

有新的加群请求（只有群主或管理员会收到

```js
{
    method: "groupListener",
    type:"onReceiveJoinApplication",
    data:{
        member: // V2TIMGroupMemberInfo,申请人，参考[关键类]V2TIMGroupMemberInfo
        opReason: //字符串，申请原因
        groupID: //字符串，群 ID
    },
    listenerUuid:"",
}
```

参考：
<a href = "#V2TIMGroupMemberInfo">V2TIMGroupMemberInfo</a>

#### onApplicationProcessed

加群请求已经被群主或管理员处理了（只有申请人能够收到）

```js
{
    method: "groupListener",
    type:"onApplicationProcessed",
    data:{
        opUser: // V2TIMGroupMemberInfo,处理人，参考[关键类]V2TIMGroupMemberInfo
        opReason: //字符串，处理原因
        isAgreeJoin: // 布尔，是否同意加群
        groupID: //字符串，群 ID
    },
    listenerUuid:"",
}
```

参考：
<a href = "#V2TIMGroupMemberInfo">V2TIMGroupMemberInfo</a>

#### onGrantAdministrator

指定管理员身份

```js
{
    method: "groupListener",
    type:"onGrantAdministrator",
    data:{
        opUser: // V2TIMGroupMemberInfo,处理人，参考[关键类]V2TIMGroupMemberInfo
        memberList: // [V2TIMGroupMemberInfo]（列表）,被处理的群成员,参考[关键类]V2TIMGroupMemberInfo
        groupID: //字符串，群 ID
    },
    listenerUuid:"",
}
```

参考：
<a href = "#V2TIMGroupMemberInfo">V2TIMGroupMemberInfo</a>

#### onRevokeAdministrator

取消管理员身份

```js
{
    method: "groupListener",
    type:"onRevokeAdministrator",
    data:{
        opUser: // V2TIMGroupMemberInfo,处理人，参考[关键类]V2TIMGroupMemberInfo
        memberList: // [V2TIMGroupMemberInfo]（列表）,被处理的群成员,参考[关键类]V2TIMGroupMemberInfo
        groupID: //字符串，群 ID
    },
    listenerUuid:"",
}
```

参考：
<a href = "#V2TIMGroupMemberInfo">V2TIMGroupMemberInfo</a>

#### onQuitFromGroup

主动退出群组（主要用于多端同步，直播群（AVChatRoom）不支持）

```js
{
    method: "groupListener",
    type:"onQuitFromGroup",
    data:{
        groupID: //字符串，群 ID
    },
    listenerUuid:"",
}
```

#### onReceiveRESTCustomData

收到 RESTAPI 下发的自定义系统消息

```js
{
    method: "groupListener",
    type:"onReceiveRESTCustomData",
    data:{
        groupID: //字符串，群 ID
        customData： //字符串，自定义数据
    },
    listenerUuid:"",
}
```

#### onGroupAttributeChanged

收到群属性更新的回调

```js
{
    method: "groupListener",
    type:"onGroupAttributeChanged",
    data:{
        groupID: //字符串，群 ID
        groupAttributeMap: //<String,String>字典，群的所有属性
    },
    listenerUuid:"",
}
```

#### onTopicCreated

话题创建

```js
{
    method: "groupListener",
    type:"onTopicCreated",
    data:{
        groupID: //字符串，群 ID
        topicID: //字符串，话题ID
    },
    listenerUuid:"",
}
```

#### onTopicDeleted

话题被删除

```js
{
    method: "groupListener",
    type:"onTopicDeleted",
    data:{
        groupID: //字符串，群 ID
        topicIDList: //字符串列表，话题列表
    },
    listenerUuid:"",
}
```

#### onTopicInfoChanged

话题更新

```js
{
    method: "groupListener",
    type:"onTopicInfoChanged",
    data:{
        groupID: //字符串，群 ID
        topicInfo: //V2TIMTopicInfo，话题信息
    },
    listenerUuid:"",
}
```

参考：
<a href = "#V2TIMTopicInfo"></a>

<a id = "V2TIMAdvancedMsgListener"></a>

### V2TIMAdvancedMsgListener
高级消息监听

#### onRecvNewMessage

收到新消息

```js
{
    method: "advancedMsgListener",
    type:"onRecvNewMessage",
    data: // V2TIMMessage
    listenerUuid:
}
```

参考：
<a href = "#V2TIMMessage">V2TIMMessage</a>

#### onRecvMessageReadReceipts

消息已读回执通知（如果自己发送的消息支持已读回执，消息接收端调用 sendMessageReadReceipts，自己会收到该通知）

```js
{
    method: "advancedMsgListener",
    type:"onRecvMessageReadReceipts",
    data: // V2TIMMessageReceipt[]
    listenerUuid:
}
```

参考：
<a href = "#V2TIMMessageReceipt">V2TIMMessageReceipt</a>

#### onRecvC2CReadReceipt

C2C 对端用户会话已读通知（如果对端用户调用 markC2CMessageAsRead 接口，自己会收到该回调，回调只会携带对端 userID 和对端已读 timestamp 信息）
消息已读回执通知（如果自己发送的消息支持已读回执，消息接收端调用 sendMessageReadReceipts，自己会收到该通知）

```js
{
    method: "advancedMsgListener",
    type:"onRecvC2CReadReceipt",
    data: // V2TIMMessageReceipt[]
    listenerUuid:
}
```

参考：
<a href = "#V2TIMMessageReceipt">V2TIMMessageReceipt</a>

#### onRecvMessageRevoked

收到消息撤回的通知

```js
{
    method: "advancedMsgListener",
    type:"onRecvMessageRevoked",
    data: // 字符串，msgID
    listenerUuid:
}
```

#### onRecvMessageModified

消息内容被修改

```js
{
    method: "advancedMsgListener",
    type:"onRecvMessageModified",
    data: // V2TIMMessage
    listenerUuid:
}
```

参考：
<a href = "#V2TIMMessage">V2TIMMessage</a>

#### onRecvMessageExtensionsChanged

消息扩展信息更新

```js
{
    method: "advancedMsgListener",
    type:"onRecvMessageExtensionsChanged",
    data: {
        msgID:
        extensions: [{
            extensionKey:
            extensionValue:
        },{}]
    },
    listenerUuid:
}
```

#### onRecvMessageExtensionsDeleted

消息扩展信息被删除

```js
{
    method: "advancedMsgListener",
    type:"onRecvMessageExtensionsChanged",
    data: {
        msgID:
        extensionKeys: //字符串列表
    },
    listenerUuid:
}
```

<a id = "V2TIMSignalingListener"></a>

### V2TIMSignalingListener
信令监听器

#### onReceiveNewInvitation

收到邀请

```js
{
    method: "signalingListener",
    type:"onReceiveNewInvitation",
    data: {
        inviteID:
        data:
        groupID:
        inviter:
        inviteeList:
    },
    listenerUuid:
}
```

#### onInviteeAccepted

被邀请者接受邀请

```js
{
    method: "signalingListener",
    type:"onInviteeAccepted",
    data: {
        inviteID:
        data:
        invitee:
    },
    listenerUuid:
}
```

#### onInviteeRejected

被邀请者拒绝邀请

```js
{
    method: "signalingListener",
    type:"onInviteeRejected",
    data: {
        inviteID:
        data:
        invitee:
    },
    listenerUuid:
}
```

#### onInvitationCancelled

邀请被取消

```js
{
    method: "signalingListener",
    type:"onInvitationCancelled",
    data: {
        inviteID:
        data:
        inviter:
    },
    listenerUuid:
}
```

#### onInvitationTimeout

邀请超时

```js
{
    method: "signalingListener",
    type:"onInvitationTimeout",
    data: {
        inviteID:
        inviteeList:
    },
    listenerUuid:
}
```

#### onInvitationModified

邀请被修改（6.7 及其以上版本支持

```js
{
    method: "signalingListener",
    type:"onInvitationModified",
    data: {
        inviteID:
        data:
    },
    listenerUuid:
}
```

<a id = "V2TIMConversationListener"></a>

### V2TIMConversationListener
会话监听

#### onSyncServerStart

同步服务器会话开始，SDK 会在登录成功或者断网重连后自动同步服务器会话，您可以监听这个事件做一些 UI 进度展示操作。

```js
{
    method: "conversationListener",
    type:"onSyncServerStart",
    data: "",
    listenerUuid:
}
```

#### onSyncServerFinish

同步服务器会话完成，如果会话有变更，会通过 onNewConversation | onConversationChanged 回调告知客户

```js
{
    method: "conversationListener",
    type:"onSyncServerFinish",
    data: "",
    listenerUuid:
}
```

#### onSyncServerFailed

同步服务器会话失败

```js
{
    method: "conversationListener",
    type:"onSyncServerFailed",
    data: "",
    listenerUuid:
}
```

#### onNewConversation

有新的会话（比如收到一个新同事发来的单聊消息、或者被拉入了一个新的群组中），可以根据会话的 lastMessage -> timestamp 重新对会话列表做排序

```js
{
    method: "conversationListener",
    type:"onNewConversation",
    data: //V2TIMConversation[],
    listenerUuid:
}
```

参考：
<a href = "#V2TIMConversation">V2TIMConversation</a>

#### onConversationChanged

某些会话的关键信息发生变化（未读计数发生变化、最后一条消息被更新等等），可以根据会话的 lastMessage -> timestamp 重新对会话列表做排序

```js
{
    method: "conversationListener",
    type:"onConversationChanged",
    data: //V2TIMConversation[],
    listenerUuid:
}
```

参考：
<a href = "#V2TIMConversation">V2TIMConversation</a>

#### onTotalUnreadMessageCountChanged

全部会话未读总数变更的通知（5.3.425 及以上版本支持）

```js
{
    method: "conversationListener",
    type:"onTotalUnreadMessageCountChanged",
    data: //数字，total count,
    listenerUuid:
}
```

> - 当您调用 getTotalUnreadMessageCount 获取全部会话未读总数以后，任意会话的未读数发生变化时，SDK 都会通过该回调把最新的未读总数通知给您。
> - 未读总数会减去设置为免打扰的会话的未读数，即消息接收选项设置为 V2TIMMessage.V2TIM_NOT_RECEIVE_MESSAGE 或 V2TIMMessage.V2TIM_RECEIVE_NOT_NOTIFY_MESSAGE 的会话。

#### onConversationGroupCreated

会话分组被创建

```js
{
    method: "conversationListener",
    type:"onConversationGroupCreated",
    data:{
        groupName:
        conversationList://V2TIMConversation[]
    } ,
    listenerUuid:
}
```

参考：
<a href = "#V2TIMConversation">V2TIMConversation</a>

#### onConversationGroupDeleted

会话分组被删除

```js
{
    method: "conversationListener",
    type:"onConversationGroupDeleted",
    data: //group name,
    listenerUuid:
}
```

#### onConversationGroupNameChanged

会话分组名变更

```js
{
    method: "conversationListener",
    type:"onConversationGroupNameChanged",
    data:{
        oldName:
        newName:
    },
    listenerUuid:
}
```

#### onConversationsAddedToGroup

会话分组新增会话

```js
{
    method: "conversationListener",
    type:"onConversationsAddedToGroup",
    data:{
        groupName:
        conversationList://V2TIMConversation[]
    } ,
    listenerUuid:
}
```

参考：
<a href = "#V2TIMConversation">V2TIMConversation</a>

#### onConversationsDeletedFromGroup

会话分组删除会话

```js
{
    method: "conversationListener",
    type:"onConversationsDeletedFromGroup",
    data:{
        groupName:
        conversationList://V2TIMConversation[]
    } ,
    listenerUuid:
}
```

参考：
<a href = "#V2TIMConversation">V2TIMConversation</a>
<a id = "V2TIMFriendshipListener"></a>

### V2TIMFriendshipListener
关系链监听器


#### onFriendApplicationListAdded

好友申请新增通知，两种情况会收到这个回调：1. 自己申请加别人好友;2. 别人申请加自己好友

```js
{
    method: "friendListener",
    type:"onFriendApplicationListAdded",
    data: // V2TIMFriendApplication,
    listenerUuid:
}
```

参考：
<a href = "#V2TIMFriendApplication">V2TIMFriendApplication</a>

#### onFriendApplicationListDeleted

好友申请删除通知，四种情况会收到这个回调:

- 调用 deleteFriendApplication 主动删除好友申请
- 调用 refuseFriendApplication 拒绝好友申请
- 调用 acceptFriendApplication 同意好友申请且同意类型为 V2TIM_FRIEND_ACCEPT_AGREE 时
  申请加别人好友被拒绝
  
  ```js
  {
    method: "friendListener",
    type:"onFriendApplicationListDeleted",
    data: // userIDList,
    listenerUuid:
  }
  ```
  
  #### onFriendApplicationListRead
  
  好友申请已读通知，如果调用 setFriendApplicationRead 设置好友申请列表已读，会收到这个回调（主要用于多端同步）
  
  ```js
  {
    method: "friendListener",
    type:"onFriendApplicationListRead",
    data:"",
    listenerUuid:
  }
  ```
  
  #### onFriendListAdded
  
  好友新增通知
  
  ```js
  {
    method: "friendListener",
    type:"onFriendListAdded",
    data: //V2TIMFriendInfo[],
    listenerUuid:
  }
  ```
  
  参考：
  <a href = "#V2TIMFriendInfo">V2TIMFriendInfo</a>

#### onFriendListDeleted

好友删除通知，，两种情况会收到这个回调：

- 自己删除好友（单向和双向删除都会收到回调）
- 好友把自己删除（双向删除会收到）
  
  ```js
  {
    method: "friendListener",
    type:"onFriendListDeleted",
    data: //userIDList,
    listenerUuid:
  }
  ```
  
  #### onBlackListAdd
  
  黑名单新增通知
  
  ```js
  {
    method: "friendListener",
    type:"onBlackListAdd",
    data: //V2TIMFriendInfo[],
    listenerUuid:
  }
  ```
  
  参考：
  <a href = "#V2TIMFriendInfo">V2TIMFriendInfo</a>

#### onBlackListDeleted

黑名单删除通知

```js
{
    method: "friendListener",
    type:"onBlackListDeleted",
    data: //userIDList,
    listenerUuid:
}
```

#### onFriendInfoChanged

好友资料更新通知

```js
{
    method: "friendListener",
    type:"onFriendInfoChanged",
    data: //V2TIMFriendInfo[],
    listenerUuid:
}
```

参考：
<a href = "#V2TIMFriendInfo">V2TIMFriendInfo</a>

<a id = "class"></a>

## 关键类

<a id="V2TIMUserFullInfo"></a>

### V2TIMUserFullInfo

```js
{
    userID: //字符串，用户 ID
    nickName: //字符串，昵称
    faceUrl: //字符串，头像
    selfSignature: // 字符串，签名
    gender: // 数字，性别，参考[enum] V2TIM_Gender
    allowType: // 数字，获取好友验证方式，参考[enum],V2TIM_Allowtype
    role: // 数字，角色
    level: // 数字，等级
    birthday: // 数字，用户生日，格式如：19700101
    customInfo:{ //json，自定义字段
        自定义key: 自定义value
    }
}
```

> 注意：
> customInfo 首先要在 控制台 (功能配置 -> 用户自定义字段) 配置用户自定义字段， 然后再调用该接口进行设置，key 值不需要加 Tag_Profile_Custom_ 前缀。

参考：
<a href = "#V2TIM_Gender"> gender </a>
<a href = "#V2TIM_Allowtype">allowType</a>

<a id="V2TIMUserStatus"></a>

### V2TIMUserStatus

```js
{
    userID: //字符串，用户 ID
    statusType: //数字，用户的状态，参考[enum] V2TIM_UserStatus
    customStatus： //字符串，用户的自定义状态
}
```

参考：
<a href = "#V2TIM_UserStatus"> statusType </a>

<a id = "V2TIMUserInfo"></a>

### V2TIMUserInfo

用户信息

```js
{
    userID://用户名
    nickName://用户昵称
    faceUrl: //用户头像
}
```

<a id = "V2TIMGroupMemberInfo"></a>

### V2TIMGroupMemberInfo

```js
{
    userID://字符串，用户名
    nickName://字符串，用户昵称
    faceUrl: //字符串，用户头像
    nameCard: //字符串，群成员名片
    friendRemark: // 字符串，好友备注，如果没有拉取过好友信息或者不是好友，返回 null
}
```

<a id = "V2TIMMessage"></a>

### V2TIMMessage

```js
{
    msgID:  //字符串，消息 ID
    sender: //字符串，消息发送者 userID
    nickName: //字符串，消息发送者昵称
    friendRemark: //字符串，好友备注。如果没有拉取过好友信息或者不是好友，返回 null
    nameCard: //字符串，群组消息，nameCard 为发送者的群名片
    faceUrl://字符串，发送者头像 url
    groupID: //字符串，群组消息，groupID 为接收消息的群组 ID，否则为 null
    userID: //字符串，如果是单聊消息，userID 为会话用户 ID，否则为 null。 假设自己和 userA 聊天，无论是自己发给 userA 的消息还是 userA 发给自己的消息，这里的 userID 均为 userA
    status: // 数字，消息状态 参考[enum] V2TIM_MsgStatus
    isSelf: //布尔，消息发送者是否是自己
    isRead: //布尔，消息自己是否已读
    isPeerRead: //布尔，该字段为 true 的条件是消息 timestamp <= 对端标记会话已读的时间
    needReadReceipt: //布尔，消息是否需要已读回执
    groupAtUserList: // userID列表，@的用户ID
    elemType: //数字，消息类型 参考[enum] V2TIM_ElemType
    textElem: //消息类型 为 V2TIM_ELEM_TYPE_TEXT，textElem 会存储文本消息内容 参考[关键类] V2TIMTextElem
    customElem: //消息类型 为 V2TIM_ELEM_TYPE_CUSTOM，customElem 会存储自定义消息内容 参考[关键类] V2TIMCustomElem
    imageElem: // 消息类型 为 V2TIM_ELEM_TYPE_IMAGE，imageElem 会存储图片消息内容 参考[关键类] V2TIMImageElem
    soundElem: //消息类型 为 V2TIM_ELEM_TYPE_SOUND，soundElem 会存储语音消息内容 参考[关键类] V2TIMSoundElem
    videoElem: //消息类型 为 V2TIM_ELEM_TYPE_VIDEO，videoElem 会存储视频消息内容 参考[关键类] V2TIMVideoElem 
    fileElem: //消息类型 为 V2TIM_ELEM_TYPE_FILE，fileElem 会存储文件消息内容 参考[关键类] V2TIMFileElem
    locationElem: //消息类型 为 V2TIM_ELEM_TYPE_LOCATION，locationElem 会存储地理位置消息内容 参考[关键类] V2TIMLocationElem 
    faceElem: //消息类型 为 V2TIM_ELEM_TYPE_FACE，faceElem 会存储表情消息内容 参考[关键类] V2TIMFaceElem 
    mergerElem: //消息类型 为 V2TIM_ELEM_TYPE_RELAY，relayElem 会存储转发消息内容 参考[关键类] V2TIMMergerElem 
    groupTipsElem://消息类型 为 V2TIM_ELEM_TYPE_GROUP_TIPS，groupTipsElem 会存储群 tips 消息内容 参考[关键类] V2TIMGroupTipsElem 
    localCustomData://字符串，消息自定义数据（本地保存，不会发送到对端，程序卸载重装后失效）
    localCustomInt://数字，消息自定义数据（本地保存，不会发送到对端，程序卸载重装后失效）
    cloudCustomData://字符串，云端自定义数据（云端保存，会发送到对端，程序卸载重装后还能拉取到）
    seq: //数字，消息的序列号，群聊中的消息序列号云端生成，在群里是严格递增且唯一的。 单聊中的序列号是本地生成，不能保证严格递增且唯一。
    random://数字，消息随机码
    isExcludedFromUnreadCount://布尔，获取消息是否不计入会话未读数，true - 不计入会话未读数，false - 计入会话未读数
    isExcludedFromLastMessage://布尔，消息是否不计入会话 lastMsg：默认为 false，表明需要计入会话 lastMsg，设置为 true，表明不需要计入会话 lastMessage
    isSupportMessageExtension: //布尔，是否支持消息扩展（6.7 及其以上版本支持，需要您购买旗舰版套餐）
    id: //id
    timestamp: //数字，消息时间戳
    offlinePushInfo://消息的离线推送信息 参考[关键类] V2TIMOfflinePushInfo
}
```

参考：
<a href = "#V2TIM_MsgStatus">V2TIM_MsgStatus</a>
<a href = "#V2TIM_ElemType">V2TIM_ElemType</a>
<a href = "#V2TIMTextElem">V2TIMTextElem</a>
<a href = "#V2TIMCustomElem">V2TIMCustomElem</a>
<a href = "#V2TIMImageElem">V2TIMImageElem</a>
<a href = "#V2TIMSoundElem">V2TIMSoundElem</a>
<a href = "#V2TIMVideoElem">V2TIMVideoElem</a>
<a href = "#V2TIMFileElem">V2TIMFileElem</a>
<a href = "#V2TIMLocationElem">V2TIMLocationElem</a>
<a href = "#V2TIMFaceElem">V2TIMFaceElem</a>
<a href = "#V2TIMMergerElem">V2TIMMergerElem</a>
<a href = "#V2TIMGroupTipsElem">V2TIMGroupTipsElem</a>
<a href = "#V2TIMOfflinePushInfo">V2TIMOfflinePushInfo</a>

<a id = "V2TIMTextElem"></a>

### V2TIMTextElem

文本消息

```js
{
    text: //字符串
    nextElem: {  //下一个elem元素
        elemType:
        (textElem | customElem | ...): //elemType对应的 elem以及elem key
        nextElem:
    }
}
```

<a id = "V2TIMCustomElem"></a>

### V2TIMCustomElem

自定义消息

```js
{
    data: //字符串
    desc://字符串
    extension://字符串
    nextElem: {  //下一个elem元素
        elemType:
        (textElem | customElem | ...): //elemType对应的 elem以及elem key
        nextElem:
    }
}
```

<a id = "V2TIMImageElem"></a>

### V2TIMImageElem

```js
{
    path: //字符串,原图本地文件路径，只对消息发送方有效
    imageList:[{
        size: //数字
        height：//数字
        type://数字 ，参考[elem] V2TIM_ImageType
        width://数字
        url: //字符串
        UUID://字符串
        localUrl://字符串
    },{}] //array,
    nextElem: {  //下一个elem元素
        elemType:
        (textElem | customElem | ...): //elemType对应的 elem以及elem key
        nextElem:
    }
}
```

参考：
<a href = "#V2TIM_ImageType">V2TIM_ImageType</a>

<a id = "V2TIMSoundElem"></a>

### V2TIMSoundElem

```js
{
    path: //字符串，语音文件路径
    UUID: //字符串，语音消息内部 ID
    dataSize: //数字，语音数据大小
    duration: //数字，语音长度（秒）
    nextElem: {  //下一个elem元素
        elemType:
        (textElem | customElem | ...): //elemType对应的 elem以及elem key
        nextElem:
    }
}
```

<a id = "V2TIMVideoElem"></a>

### V2TIMVideoElem

```js
{
    videoPath: //字符串，文件本地路径
    UUID: //字符串，视频文件 ID
    videoSize: //数字，视频文件大小
    duration: //数字，长度（秒）
    videoUrl: //字符串，获取视频 URL 下载地址
    snapshotHeight://数字，高度
    snapshotWidth://数字，宽度
    snapshotSize://数字，截图大小
    snapshotPath://字符串，发送时设置的截图路径
    snapshotUUID//字符串，截图 ID
    nextElem: {  //下一个elem元素
        elemType:
        (textElem | customElem | ...): //elemType对应的 elem以及elem key
        nextElem:
    }
}
```

<a id = "V2TIMFileElem"></a>

### V2TIMFileElem

```js
{
    path: //字符串，文件本地路径
    UUID: //字符串，视频文件 ID
    fileName://字符串，文件名称
    fileSize: //数字，文件大小
    url://字符串，文件的 URL 下载地址
    localUrl//字符串，
    nextElem: {  //下一个elem元素
        elemType:
        (textElem | customElem | ...): //elemType对应的 elem以及elem key
        nextElem:
    }
}
```

<a id = "V2TIMLocationElem"></a>

### V2TIMLocationElem

```js
{
    desc: //字符串，位置描述
    longitude: // 数字，经度
    latitude://数字，纬度
    nextElem: {  //下一个elem元素
        elemType:
        (textElem | customElem | ...): //elemType对应的 elem以及elem key
        nextElem:
    }
}
```

<a id = "V2TIMFaceElem"></a>

### V2TIMFaceElem

```js
{
    data: //字符串，表情自定义数据
    index: // 数字，表情索引
    nextElem: {  //下一个elem元素
        elemType:
        (textElem | customElem | ...): //elemType对应的 elem以及elem key
        nextElem:
    }
}
```

<a id = "V2TIMMergerElem"></a>

### V2TIMMergerElem

```js
{
    isLayersOverLimit: // 布尔，合并消息里面又包含合并消息我们称之为合并嵌套，合并嵌套层数不能超过 100 层，如果超过限制，layersOverLimit 会返回 true， title 和 abstractList 会返回空，downloadMergerMessage 会返回 ERR_MERGER_MSG_LAYERS_OVER_LIMIT 错误码。
    abstractList:[] //字符串列表，合并消息摘要列表
    title:// 字符串，合并消息 title
    nextElem: {  //下一个elem元素
        elemType:
        (textElem | customElem | ...): //elemType对应的 elem以及elem key
        nextElem:
    }
}
```

<a id = "V2TIMGroupTipsElem"></a>

### V2TIMGroupTipsElem

```js
{
    gropuID: // 字符串，群组ID
    type: //数字，群组事件通知类型 参考[elem] V2TIM_GroupTipsType
    opMember: //V2TIMGroupMemberInfo, 操作者 
    memberList:[] //V2TIMGroupMemberInfo列表，合并消息摘要列表
    groupChangeInfoList:[] // V2TIMGroupChangeInfo列表，群资料变更信息列表，仅当tipsType值为V2TIMGroupTipsElem#V2TIM_GROUP_TIPS_TYPE_GROUP_INFO_CHANGE时有效
    memberChangeInfoList:[] // V2TIMGroupMemberChangeInfo，群成员变更信息列表，仅当tipsType值为V2TIMGroupTipsElem#V2TIM_GROUP_TIPS_TYPE_MEMBER_INFO_CHANGE时有效
    membercount:  // 数字，当前群成员数，仅当tipsType值为V2TIMGroupTipsElem#V2TIM_GROUP_TIPS_TYPE_JOIN, V2TIMGroupTipsElem#V2TIM_GROUP_TIPS_TYPE_QUIT, V2TIMGroupTipsElem#V2TIM_GROUP_TIPS_TYPE_KICKED的时候有效
    nextElem: {  //下一个elem元素
        elemType:
        (textElem | customElem | ...): //elemType对应的 elem以及elem key
        nextElem:
    }
}
```

参考：
<a href = "#V2TIMGroupMemberInfo">V2TIMGroupMemberInfo</a>
<a href = "#V2TIM_GroupTipsType">V2TIM_GroupTipsType</a>
<a href = "#V2TIMGroupChangeInfo">V2TIMGroupChangeInfo</a>
<a href = "#V2TIMGroupMemberChangeInfo">V2TIMGroupMemberChangeInfo</a>

<a id = "V2TIMOfflinePushInfo"></a>

### V2TIMOfflinePushInfo

```js
{
    desc: //字符串，离线推送展示内容。自定义消息进行离线推送，必须设置此字段内容
    title://字符串，通知栏标题
    disablePush: //布尔，是否关闭推送（默认开启推送）。    true：关闭；false：打开
    ext://字符串，离线推送透传的扩展字段。
    ignoreIOSBadge: //布尔，离线推送忽略 badge 计数（仅对 iOS 生效）， 如果设置为 true，在 iOS 接收端，这条消息不会使 APP 的应用图标未读计数增加。iOS 应用图标未读计数状态。true：忽略；false：开启
    IOSSound: //字符串，离线推送声音设置（仅对 iOS 生效） 当 sound = "push.no_sound"，表示接收时不会播放声音。 当 sound = "default"，表示接收时播放系统声音。 如果要自定义 iOSSound，需要先把语音文件链接进 Xcode 工程，然后把语音文件名（带后缀）设置给 iOSSound。
    AndroidSound://字符串，离线推送声音设置（仅对 Android 生效, IMSDK 6.1 及以上版本支持）。 只有华为和谷歌手机支持设置声音提示，小米手机设置声音提示，请您参照：https://dev.mi.com/console/doc/detail?pId=1278%23_3_0 另外，谷歌手机 FCM 推送在 Android 8.0 及以上系统设置声音提示，必须调用 setAndroidFCMChannelID 设置好 channelID，才能生效。	Android 工程里 raw 目录中的铃声文件名，不需要后缀名。
    AndroidOPPOChannelID: //字符串，离线推送设置 OPPO 手机 8.0 系统及以上的渠道 ID。
    IOSPushType: //number, iOS 离线推送的类型（仅对 iOS 生效）0:普通的 APNs 推送; 1：VoIP 推送，默认取值为 IOS_OFFLINE_PUSH_TYPE_APNS

}
```

<a id = "V2TIMGroupChangeInfo"></a>

### V2TIMGroupChangeInfo

```js
{
    value: //字符串，根据变更类型表示不同的值，例如 type = V2TIMGroupChangeInfo.V2TIM_GROUP_INFO_CHANGE_TYPE_NAME，value 表示群新的 groupName
    type: //数字，参考[enum] V2TIM_GroupInfoChangeType
    key: // 字符串，变更自定义字段的 key 值（type = V2TIMGroupChangeInfo.V2TIM_GROUP_INFO_CHANGE_TYPE_CUSTOM 生效） 因为历史遗留原因，如果只修改了群自定义字段，当前消息不会存漫游和 DB
}
```

参考：
<a href = "#V2TIM_GroupInfoChangeType">V2TIM_GroupInfoChangeType</a>

<a id = "V2TIMGroupMemberChangeInfo"></a>

### V2TIMGroupMemberChangeInfo

```js
{
    userID: //字符串，获取群成员的identifier
    muteTime: // 数字，获取被禁言时间
}
```

<a id = "V2TIMTopicInfo"></a>

### V2TIMTopicInfo

```js
{
    topicID: //字符串，只能在创建话题或者修改话题信息的时候设置。
    topicName://字符串，话题名称
    notification://字符串，话题公告，创建话题和修改话题信息都可以设置
    introduction://字符串，话题介绍，创建话题和修改话题信息都可以设置
    topicFaceUrl://字符串，话题头像
    isAllMuted://布尔，话题全员禁言，只能在修改话题信息的时候设置
    selfMuteTime://数字，自己在话题中的禁言时间
    customString://字符串，自定义字符串
    recvOpt://数字，话题消息接收选项,修改话题消息接收选项请调用 setReceiveMessageOpt 接口
    draftText://字符串，话题草稿
    unreadCount: //数字，未读消息数量
    lastMessage://V2TIMMessage
    groupAtInfolist:[{ // 话题 at 信息列表
        atType: // 数字，参考[enum],V2TIM_At
        seq: //数字
    },{}]
}
```

参考：
<a href = "#V2TIMMessage">V2TIMMessage</a>
<a href = "#V2TIM_At">V2TIM_At</a>

<a id = "V2TIMGroupInfo"></a>

### V2TIMGroupInfo

```js
{
    groupType:, //字符串，V2TIM_GroupType
    groupID:,//字符串，
    groupName://字符串，
    notification://字符串，
    introduction://字符串，
    faceUrl://字符串，
    addOpt: // 数字
    isAllMuted: //布尔
    isSupportTopic: //布尔
}
```

> 自定义群组 ID 必须为可打印 ASCII 字符（0x20-0x7e），最长48个字节，且前缀不能为 @TGS（避免与默认分配的群组 ID 混淆）
> 参考：
> <a href = "#V2TIM_GroupType">V2TIM_GroupType</a>

<a id = "V2TIMCreateGroupMemberInfo"></a>

### V2TIMCreateGroupMemberInfo

```js
{
    userID: //字符串
    role: //数字，角色,参考[enum]V2TIM_GroupMemberRole
}
```

> 成员类型 1、role 不设置或者设置为 V2TIM_GROUP_MEMBER_UNDEFINED，进群后默认为群成员 2、Work 群不支持设置 role 为管理员 3、所有群都不支持设置 role 为群主
> 参考：
> <a href = "#V2TIM_GroupMemberRole">V2TIM_GroupMemberRole</a>

<a id = "V2TIMMessageReceipt" ></a>

### V2TIMMessageReceipt

```js
{
    userID://字符串，C2C 消息接收对象
    timestamp://数字，C2C 对端用户标记会话已读的时间
    groupID://字符串
    msgID://字符串
    readCount://数字，群消息已读人数
    unreadCount://数字，群消息未读人数
}
```

<a id = "V2TIMMessageSearchResultItem"></a>

### V2TIMMessageSearchResultItem

```js
{
    conversationID: //会话 ID
    messageCount:   //当前会话一共搜索到了多少条符合要求的消息
    messageList //满足搜索条件的消息列表
}
```

> 如果您本次搜索【指定会话】，那么 messageList 中装载的是本会话中所有满足搜索条件的消息列表。
> 如果您本次搜索【全部会话】，那么 messageList 中装载的消息条数会有如下两种可能：
> 
> - 如果某个会话中匹配到的消息条数 > 1，则 messageList 为空，您可以在 UI 上显示“ messageCount 条相关记录”。
> - 如果某个会话中匹配到的消息条数 = 1，则 messageList 为匹配到的那条消息，您可以在 UI 上显示之，并高亮匹配关键词。

<a id = "V2TIMMessageExtensionResult"></a>

### V2TIMMessageExtensionResult

```js
{
    resultCode:
    resultInfo:
    extension:{
        extensionKey:
        extensionValue:
    }
}
```

<a id = "V2TIMGroupMemberFullInfo"></a>

### V2TIMGroupMemberFullInfo

```js
{
    userID://修改的群成员 userID
    role: //群成员角色，V2TIM_GroupMemberRole
    muteUntil: //群成员禁言结束时间戳，禁言用户请调用 V2TIMGroupManager.muteGroupMember() 接口
    nameCard: //群成员名片
    customInfo: //map<string,string> 群成员自定义字段
    joinTime: //群成员入群时间，自动生成，不可修改。
    nickName: //昵称
    friendRemark: //字符串，好友备注。如果没有拉取过好友信息或者不是好友，返回 null
}
```

参考：
<a href = "#V2TIM_GroupMemberRole">V2TIM_GroupMemberRole</a>

<a id = "V2TIMSignalingInfo"></a>

### V2TIMSignalingInfo

```js
{
    inviteID:
    groupID:
    inviter:
    inviteeList:
    data:
    timeout:
    actionType: // V2TIM_SignalingActionType
}
```

参考：
<a href = "#V2TIM_SignalingActionType">V2TIM_SignalingActionType</a>

<a id = "V2TIMConversation"></a>

### V2TIMConversation

```js
{
    conversationID: //会话 ID
    type: //V2TIM_ConversationType
    userID: //如果会话类型为 C2C 单聊，userID 会存储对方的用户ID，否则为 null
    groupID: // 如果会话类型为群聊，groupID 会存储当前群的群 ID，否则为 null
    showName: // 获取会话展示名称，其展示优先级如下：群组：群名称 -> 群 ID C2C：对方好友备注 -> 对方昵称 -> 对方的 userID
    faceUrl: // 会话展示头像群组：群头像 C2C：对方头像
    recvOpt: //消息接收选项（接收 | 接收但不提醒 | 不接收）
    groupType: //获取群类型（群会话有效）
    unreadCount: //未读计数
    draftText: //未编辑完的草稿消息（只存本地，程序卸载重装后会丢失）
    draftTimestamp: //草稿消息的时间,单位：秒
    isPinned: //是否置顶
    orderkey: //排序字段
    markList://会话标记列表 V2TIM_ConversationMarkType
    customData: //字符串，会话自定义数据
    conversationGroupList: //会话所属分组列表
    lastMessage: //会话最后一条消息,V2TIMMessage
    groupAtInfoList: //群会话 @ 信息列表，用于展示“有人@我”或者“@所有人”等提醒状态。V2TIMGroupAtInfo
}
```

> orderKey 注意:
> 排序字段 orderKey 是按照会话的激活时间线性递增的一个数字（注意：不是时间戳，因为同一时刻可能会有多个会话被同时激活）
> 5.5.892 及其以后版本，推荐您使用该字段对所有会话进行排序，orderKey 值越大，代表该会话排序越靠前
> 当您 “清空会话所有消息” 或者 “逐个删除会话的所有消息” 之后，会话的 lastMessage 变为空，但会话的 orderKey 不会改变；如果想保持会话的排序位置不变，可以使用该字段对所有会话进行排序
> 参考：
> <a href = "#V2TIM_ConversationType">V2TIM_ConversationType</a>
> <a href = "#V2TIM_ConversationMarkType">V2TIM_ConversationMarkType</a>

<a id = "V2TIMFriendApplication"></a>

### V2TIMFriendApplication

```js
{
    userID:
    nickName: //好友昵称
    faceUrl: //好友头像
    addTime: //增加时间
    addSource: //来源
    addWording: //好友附言
    type: //V2TIM_FriendApplication
}
```

参考：
<a href = "#V2TIM_FriendApplication">V2TIM_FriendApplication</a>
<a id = "V2TIMFriendInfo"></a>

### V2TIMFriendInfo

```js
{
    userID:
    friendRemark: //好友备注
    friendGroup:  //好友所在分组列表
    userProfile:    //V2TIMUserFullInfo
    friendCustomInfo: //Map<string,string> 好友自定义字段
}
```

参考：
<a href = "#V2TIMUserFullInfo">V2TIMUserFullInfo</a>

<a id = "qrcode"></a>

## 开发群
<img src="https://qcloudimg.tencent-cloud.cn/raw/f348789d03975dc153a6203b8744f335.jpg" width="50%"></img>
