// interfaces
const V2TIMCreateGroupMemberInfo = {
    userID:{
        type:"string"
    },
    role:{
        type:"number",
        option:{
            200:"member",
            300:"admin",
            400:"owner"
        }
    }
};

 const V2TIMUserFullInfo = {
    userID:{
        type:"string"
    },
    nickName:{
        type:"string"
    },
    faceUrl:{
        type:"string"
    },
    selfSignature:{
        type:"string"
    },
    gender:{
        type:"number",
        option:{
            0:"unknown",
            1:"male",
            2:"female"
        }
    },
    allowType:{
        type:"number",
        option:{
            0:"allow any",
            1:"deny any",
            2:"need confirm"
        }
    },
    role:{
        type:"number"
    },
    level:{
        type:"number"
    },
    birthday:{
        type:"number"
    },
    customInfo:{
        type:"Object"
    },
}
 const  V2TIMUserStatus = {
    userID:{
        type:"string"
    },
    statusType:{
        type:"number",
        option:{
            0:"unknown",
            1:"online",
            2:"offline",
            3:"unlogin"
        }
    },
    customStatus:{
        type:"string",
        desc:"用户自定义状态"
    },
};
const nextElem = {
    elemType:{
        type:"number",
        option:{
            1:"text",
            2:"custom",
            3:"image",
            4:"sound",
            5:"video",
            6:"file",
            7:"location",
            8:"face",
            9:"group tips",
            10:"merger"
        },
        desc:"消息类型"
    },
    nextElem:{
        type:"nextElem"
    }
};

const V2TIMTextElem = {
    text:{
        type:"string"
    },
    nextElem:{
        type:nextElem
    }
};

const V2TIMCustomElem = {
    data:{
        type:"string"
    },
    desc:{
        type:"string"
    },
    extension:{
        type:"string"
    },
    nextElem:{
        type:nextElem
    }
};

const V2TIMImage = {
    size:{
        type:"number"
    },
    height:{
        type:"number"
    },
    width:{
        type:"number"
    },
    type:{
        type:"number",
        option:{
            0:"origin",
            1:"缩略图",
            2:"大图"
        },
    },
    url:{
        type:"string"
    },
    UUID:{
        type:"string"
    },
    localUrl:{
        type:"string"
    },
};

const V2TIMImageElem = {
    path:{
        type:"string",
        desc:"原图本地文件路径，只对消息发送方有效"
    },
    imageList:{
        type:"Array",
        arrayType:V2TIMImage
    },
    nextElem:{
        type:nextElem
    }
};

const V2TIMSoundElem = {
    path:{
        type:"string"
    },
    UUID:{
        type:"string"
    },
    dataSize:{
        type:"number"
    },
    duration:{
        type:"number"
    },
    nextElem:{
        type:nextElem
    }
};

const V2TIMVideoElem = {
    videoPath:{
        type:"string"
    },
    UUID:{
        type:"string"
    },
    videoSize:{
        type:"number"
    },
    duration:{
        type:"number"
    },
    videoUrl:{
        type:"string"
    },
    snapshotHeight:{
        type:"number"
    },
    snapshotWidth:{
        type:"number"
    },
    snapshotSize:{
        type:"number"
    },
    snapshotPath:{
        type:"string"
    },
    snapshotUUID:{
        type:"string"
    },
    nextElem:{
        type:nextElem
    }
};

const V2TIMFileElem = {
    path:{
        type:"string",
        desc:"文件本地路径"
    },
    UUID:{
        type:"string"
    },
    fileName:{
        type:"string"
    },
    fileSize:{
        type:"number"
    },
    url:{
        type:"string",
        desc:"文件的 URL 下载地址"
    },
    localUrl:{
        type:"string"
    },
    nextElem:{
        type:nextElem
    }
};

const V2TIMLocationElem = {
    desc:{
        type:"string"
    },
    longitude:{
        type:"number"
    },
    latitude:{
        type:"number"
    },
    nextElem:{
        type:nextElem
    }
};

const V2TIMFaceElem = {
    data:{
        type:"string"
    },
    index:{
        type:"number"
    },
    nextElem:{
        type:nextElem,
        desc:"下一条消息内容"
    }
};

const V2TIMMergerElem = {
    isLayersOverLimit:{
        type:"boolean",
        desc:"合并消息里面又包含合并消息我们称之为合并嵌套，合并嵌套层数不能超过 100 层，如果超过限制，layersOverLimit 会返回 true， title 和 abstractList 会返回空，downloadMergerMessage 会返回 ERR_MERGER_MSG_LAYERS_OVER_LIMIT 错误码。"
    },
    abstractList:{
        type:"Array",
        arrayType:"string",
        desc:"合并消息摘要列表"
    },
    title:{
        type:"string"
    },
    nextElem:{
        type:nextElem
    }
};

const V2TIMGroupMemberInfo ={
    userID:{
        type:"string"
    },
    nickName:{
        type:"string"
    },
    faceUrl:{
        type:"string"
    },
    nameCard:{
        type:"string",
        desc:"群成员名片"
    },
    friendRemark:{
        type:"string",
        desc:"好友备注，如果没有拉取过好友信息或者不是好友，返回 null"
    }
};

const V2TIMGroupChangeInfo = {
    value:{
        type:"string",
        desc:"根据变更类型表示不同的值，例如 type = V2TIMGroupChangeInfo.V2TIM_GROUP_INFO_CHANGE_TYPE_NAME，value 表示群新的 groupName"
    },
    type:{
        type:"number",
        option:{
            0:"非法值",
            1:"群名修改",
            2:"群简介修改",
            3:"群公告修改",
            4:"群头像修改",
            5:"群主变更",
            6:"群自定义字段变更",
            8:"全员禁言字段变更,需要后台配置,通过接口 getBoolValue 获取变更后的值",
            10:"消息接收选项变更,通过接口 getIntValue 获取变更后的值",
            11:"加群选项变更,通过接口 getIntValue 获取变更后的值"
        }
    },
    key:{
        type:"string",
        desc:"变更自定义字段的 key 值（type = V2TIMGroupChangeInfo.V2TIM_GROUP_INFO_CHANGE_TYPE_CUSTOM 生效） 因为历史遗留原因，如果只修改了群自定义字段，当前消息不会存漫游和 DB"
    }
};


const V2TIMGroupMemberChangeInfo = {
    userID:{
        type:"string"
    },
    muteTime:{
        type:"number",
        desc:"被禁言时间"
    },
};

const V2TIMGroupTipsElem = {
    groupID:{
        type:"string"
    },
    type:{
        type:"number",
        option:{
            0:"invalid",
            1:"主动入群（memberList 加入群组，非 Work 群有效）",
            2:"被邀请入群（opMember 邀请 memberList 入群，Work 群有效）",
            3:"退出群组",
            4:"踢出群 (opMember 把 memberList 踢出群组)",
            5:"设置管理员 (opMember 把 memberList 设置为管理员)",
            6:"取消管理员 (opMember 取消 memberList 管理员身份)",
            7:"群资料变更 (opMember 修改群资料：groupName & introduction & notification & faceUrl & owner & custom)",
            8:"群成员资料变更 (opMember 修改群成员资料：muteTime)"
        }
    },
    opMember:{
        type:V2TIMGroupMemberInfo,
        desc:"操作者"
    },
    memberList:{
        type:"Array",
        arrayType:V2TIMGroupMemberInfo,
        desc:"被操作人列表"
    },
    groupChangeInfoList:{
        type:"Array",
        arrayType:V2TIMGroupChangeInfo,
        desc:"群资料变更信息列表，仅当tipsType值为V2TIMGroupTipsElem#V2TIM_GROUP_TIPS_TYPE_GROUP_INFO_CHANGE时有效"
    },
    memberChangeInfoList:{
        type:"Array",
        arrayType:V2TIMGroupMemberChangeInfo,
        desc:"群成员变更信息列表，仅当tipsType值为V2TIMGroupTipsElem#V2TIM_GROUP_TIPS_TYPE_MEMBER_INFO_CHANGE时有效"
    },
    membercount:{
        type:"number",
        desc:"当前群成员数，仅当tipsType值为V2TIMGroupTipsElem#V2TIM_GROUP_TIPS_TYPE_JOIN, V2TIMGroupTipsElem#V2TIM_GROUP_TIPS_TYPE_QUIT, V2TIMGroupTipsElem#V2TIM_GROUP_TIPS_TYPE_KICKED的时候有效"
    },
    nextElem:{
        type:nextElem
    }
};

const V2TIMOfflinePushInfo = {
    desc:{
        type:"string",
        desc:"离线推送展示内容。自定义消息进行离线推送，必须设置此字段内容"
    },
    title:{
        type:"string",
        desc:"通知栏标题"
    },
    disablePush:{
        type:"boolean",
        desc:"是否关闭推送（默认开启推送）。true：关闭；false：打开"
    },
    ext:{
        type:"string",
        desc:"离线推送透传的扩展字段。"
    }
};

 const V2TIMMessage = {
    msgID:{
        type:"string",
        desc:"消息ID"
    },
    sender:{
        type:"string",
        desc:"消息发送者 userID"
    },
    nickName:{
        type:"string",
        desc:"消息发送者昵称"
    },
    friendRemark:{
        type:"string",
        desc:"好友备注。如果没有拉取过好友信息或者不是好友，返回 null"
    },
    nameCard:{
        type:"string",
        desc:"群组消息，nameCard 为发送者的群名片"
    },
    faceUrl:{
        type:"string",
        desc:"发送者头像 url"
    },
    groupID:{
        type:"string",
        desc:"群组消息，groupID 为接收消息的群组 ID，否则为 null"
    },
    userID:{
        type:"string",
        desc:"如果是单聊消息，userID 为会话用户 ID，否则为 null。 假设自己和 userA 聊天，无论是自己发给 userA 的消息还是 userA 发给自己的消息，这里的 userID 均为 userA"
    },
    status:{
        type:"number",
        option:{
            1:"sending",
            2:"send success",
            3:"send fail",
            4:"msg has deleted",
            5:"local imported",
            6:"local revoked"
        },
        desc:"消息状态"
    },
    isSelf:{
        type:"boolean",
        desc:"消息发送者是否是自己"
    },
    isRead:{
        type:"boolean",
        desc:"消息自己是否已读"
    },
    isPeerRead:{
        type:"boolean",
        desc:"该字段为 true 的条件是消息 timestamp <= 对端标记会话已读的时间"
    },
    needReadReceipt:{
        type:"boolean",
        desc:"消息是否需要已读回执"
    },
    groupAtUserList:{
        type:"Array",
        arrayType:"string",
        desc:"userID列表，@的用户ID"
    },
    elemType:{
        type:"number",
        option:{
            1:"text",
            2:"custom",
            3:"image",
            4:"sound",
            5:"video",
            6:"file",
            7:"location",
            8:"face",
            9:"group tips",
            10:"merger"
        },
        desc:"消息类型"
    },
    textElem:{
        type:V2TIMTextElem,
        desc:"文本消息内容"
    },
    customElem:{
        type:V2TIMCustomElem,
        desc:"自定义消息内容"
    },
    imageElem:{
        type:V2TIMImageElem,
        desc:"图片消息内容"
    },
    soundElem:{
        type:V2TIMSoundElem,
        desc:"音消息内容"
    },
    videoElem:{
        type:V2TIMVideoElem,
        desc:"视频消息内容"
    },
    fileElem:{
        type:V2TIMFileElem,
        desc:"文件消息内容"
    },
    locationElem:{
        type:V2TIMLocationElem,
        desc:"地理位置消息内容"
    },
    faceElem:{
        type:V2TIMFaceElem,
        desc:"表情消息内容"
    },
    mergerElem:{
        type:V2TIMMergerElem,
        desc:"转发消息内容"
    },
    groupTipsElem:{
        type:V2TIMGroupTipsElem,
        desc:"群 tips 消息内容"
    },
    localCustomData:{
        type:"string",
        desc:"消息自定义数据"
    },
    localCustomInt:{
        type:"string",
        desc:"消息自定义数据"
    },
    cloudCustomData:{
        type:"string",
        desc:"云端自定义数据"
    },
    seq:{
        type:"number",
        desc:"消息的序列号，群聊中的消息序列号云端生成，在群里是严格递增且唯一的。 单聊中的序列号是本地生成，不能保证严格递增且唯一。"
    },
    random:{
        type:"number",
        desc:"消息随机码"
    },
    isExcludedFromUnreadCount:{
        type:"boolean",
        desc:"获取消息是否不计入会话未读数，true - 不计入会话未读数，false - 计入会话未读数"
    },
    isExcludedFromLastMessage:{
        type:"boolean",
        desc:"消息是否不计入会话 lastMsg：默认为 false，表明需要计入会话 lastMsg，设置为 true，表明不需要计入会话 lastMessage"
    },
    isSupportMessageExtension:{
        type:"boolean",
        desc:"是否支持消息扩展（6.7 及其以上版本支持，需要您购买旗舰版套餐）"
    },
    id:{
        type:"string",
        desc:"消息id，推荐使用msgID"
    },
    timestamp:{
        type:"number",
        desc:"消息时间戳"
    },
    offlinePushInfo:{
        type:V2TIMOfflinePushInfo,
        desc:"消息的离线推送信息"
    },
};


 const V2TIMExtension ={
    extensionKey:{
        type:"string"
    },
    extensionValue:{
        type:"string"
    }
};
 const V2TIMMessageExtensionResult = {
    resultCode:{
        type:"number"
    },
    resultInfo:{
        type:"string"
    },
    extension:{
        type:V2TIMExtension
    }
};

 const V2TIMReceiveMessageOptInfo = {
    c2CReceiveMessageOpt:{
        type:"number",
        option:{
            0:"receive message",
            1:"not receive message",
            2:"receive not notify message"
        }
    },
    userID:{
        type:"string"
    }
};

 const V2TIMGroupInfo = {
    groupType:{
        type:"string",
        option:{
            Work:"工作群",
            Public:"公开群",
            Meeting:"会议群",
            Community:"社群",
            AVChatRoom:"直播群"
        }
    },
    groupID:{
        type:"string"
    },
    groupName:{
        type:"string"
    },
    notification:{
        type:"string"
    },
    introduction:{
        type:"string"
    },
    faceUrl:{
        type:"string"
    },
    addOpt:{
        type:"number",
        option:{
          0:"禁止加群",
          1:"需要管理员审批",
          2:"任何人可以加入"  
        }
    },
    isAllMuted:{
        type:"boolean"
    },
    isSupportTopic:{
        type:"boolean"
    },
    customInfo:{
        type:"Object"
    }
};
 const V2TIMGroupInfoResult = {
    resultCode:{
        type:"numbeer"
    },
    resultMessage:{
        type:"string"
    },
    groupInfo:{
        type:V2TIMGroupInfo
    }
};
const V2TIMGroupMemberFullInfo = {
    userID:{
        type:"string"
    },
    role:{
        type:"number",
        option:{
            200:"member",
            300:"admin",
            400:"owner"
        },
        desc:"群成员角色"
    },
    muteUntil:{
        type:"number",
        desc:"群成员禁言结束时间戳，禁言用户请调用 V2TIMGroupManager.muteGroupMember() 接口"
    },
    nameCard:{
        type:"string"
    },
    customInfo:{
        type:"Object",
        desc:"群成员自定义字段"
    },
    joinTime:{
        type:"number",
        desc:"群成员入群时间，自动生成，不可修改。"
    },
    nickName:{
        type:"string"
    },
    friendRemark:{
        type:"string",
        desc:"好友备注。如果没有拉取过好友信息或者不是好友，返回 null"
    }
};


 const V2TIMInviteUserToGroupResult = {
    memberID:{
        type:"string"
    },
    result:{
        type:"number",
        option:{
            0:"fail",
            1:"success",
            2:"invalid",
            3:"pending",
            4:"overlimit"
        }
    }
};

 const V2TIMGroupApplication = {
    groupID:{
        type:"string"
    },
    fromUser:{
        type:"string"
    },
    fromUserNickName:{
        type:"string"
    },
    fromUserFaceUrl:{
        type:"string"
    },
    toUser:{
        type:"string"
    },
    addTime:{
        type:"number"
    },
    requestMsg:{
        type:"string"
    },
    handledMsg:{
        type:"string"
    },
    type:{
        type:"number",
        option:{
            0:"join",
            1:"invite"
        }
    },
    handleStatus:{
        type:"string",
        option:{
            0:"unhandled",
            1:"handled by other",
            2:"handled by self"
        }
    },
    handleResult:{
        type:"string",
        option:{
            0:"refuse",
            1:"agree"
        }
    },
};

const V2TIMGroupAtInfo = {
    atType:{
        type:"number",
        option:{
            0:"unknown",
            1:"at me",
            2:"at all",
            3:"at all and at me"
        }
    },
    seq:{
        type:"number"
    }
};

 const V2TIMTopicInfo = {
    topicID:{
        type:"string",
        desc:"只能在创建话题或者修改话题信息的时候设置。"
    },
    topicName:{
        type:"string",
        desc:"话题名称"
    },
    notification:{
        type:"string",
        desc:"话题公告，创建话题和修改话题信息都可以设置"
    },
    introduction:{
        type:"string",
        desc:"话题介绍，创建话题和修改话题信息都可以设置"
    },
    topicFaceUrl:{
        type:"string",
        desc:"话题头像"
    },
    isAllMuted:{
        type:"boolean",
        desc:"话题全员禁言，只能在修改话题信息的时候设置"
    },
    selfMuteTime:{
        type:"number",
        desc:"自己在话题中的禁言时间"
    },
    customString:{
        type:"string",
        desc:"自定义字符串"
    },
    recvOpt:{
        type:"number",
        desc:"话题消息接收选项,修改话题消息接收选项请调用 setReceiveMessageOpt 接口"
    },
    draftText:{
        type:"string",
        desc:"话题草稿"
    },
    unreadCount:{
        type:"number",
        desc:"未读消息数量"
    },
    lastMessage:{
        type:V2TIMMessage,
        desc:""
    },
    groupAtInfolist:{
        type:"Array",
        arrayType:V2TIMGroupAtInfo
    }
};

 const V2TIMTopicResult = {
    errorCode:{
        type:"number"
    },
    topicID:{
        type:"string"
    },
    errorMessage:{
        type:"string"
    },
};

 const V2TIMSignalingInfo = {
    inviteID:{
        type:"string"
    },
    groupID:{
        type:"string"
    },
    inviter:{
        type:"string"
    },
    inviteeList:{
        type:"Array",
        arrayType:"string"
    },
    data:{
        type:"string"
    },
    timeout:{
        type:"number"
    },
    actionType:{
        type:"number",
        option:{
            0:"未定义",
            1:"邀请方发起邀请",
            2:"邀请方取消邀请",
            3:"被邀请方接受邀请",
            4:"被邀请方拒绝邀请",
            5:"邀请超时"
        }
    }
};
 const V2TIMConversation = {
    conversationID:{
        type:"string",
        desc:"会话 ID"
    },
    type:{
        type:"number",
        option:{
            0:"invalid",
            1:"c2c",
            2:"group"
        }
    },
    userID:{
        type:"string",
        desc:"如果会话类型为 C2C 单聊，userID 会存储对方的用户ID，否则为 null"
    },
    groupID:{
        type:"string",
        desc:"如果会话类型为群聊，groupID 会存储当前群的群 ID，否则为 null"
    },
    showName:{
        type:"string",
        desc:"获取会话展示名称，其展示优先级如下：群组：群名称 -> 群 ID C2C：对方好友备注 -> 对方昵称 -> 对方的 userID"
    },
    faceUrl:{
        type:"string",
        desc:"会话展示头像群组：群头像 C2C：对方头像"
    },
    recvOpt:{
        type:"string",
        desc:"消息接收选项（接收 | 接收但不提醒 | 不接收）"
    },
    groupType:{
        type:"string",
    },
    unreadCount:{
        type:"number"
    },
    draftText:{
        type:"string",
        desc:"未编辑完的草稿消息（只存本地，程序卸载重装后会丢失）"
    },
    draftTimeStamp:{
        type:"number",
        desc:"草稿消息的时间,单位：秒"
    },
    isPinned:{
        type:"boolean",
        desc:"是否置顶"
    },
    orderKey:{
        type:"string",
        desc:"排序字段"
    },
    markList:{
        type:"Array",
        arrayType:"number",
        option:{
            0x1:"会话标星",
            0x10:"会话标记未读（重要会话）",
            0x100:"会话折叠",
            0x1000:"会话隐藏"
        },
        desc:"会话标记列表"
    },
    customData:{
        type:"string"
    },
    conversationGroupList:{
        type:"Array",
        arrayType:"string",
        desc:"会话所属分组列表"
    },
    lastMessage:{
        type:V2TIMMessage
    },
    groupAtInfolist:{
        type:"Array",
        arrayType:V2TIMGroupAtInfo
    },
};
 const V2TIMConversationResult = {
    conversationID:{
        type:"string"
    },
    resultCode:{
        type:"number"
    },
    resultInfo:{
        type:"string"
    }
};
 const V2TIMFriendInfo = {
    userID:{
        type:"string"
    },
    friendRemark:{
        type:"string"
    },
    friendGroup:{
        type:"Array",
        arrayType:"string"
    },
    userProfile:{
        type:V2TIMUserFullInfo
    },
    friendCustomInfo:{
        type:"Object"
    }
};
 const V2TIMFriendInfoResult = {
    resultCode:{
        type:"number"
    },
    resultInfo:{
        type:"string"
    },
    relation:{
        type:"number",
        option:{
            0:"none",
            1:"in my friend list",
            2:"in other friend list",
            3:"both way"
        }
    },
    friendInfo:{
        type:V2TIMFriendInfo
    }
};
 const V2TIMCheckFriendResult = {
    userID:{
        type:"string"
    },
    resultCode:{
        type:"number"
    },
    resultInfo:{
        type:"string"
    },
    relation:{
        type:"number",
        option:{
            0:"none",
            1:"in my friend list",
            2:"in other friend list",
            3:"both way"
        }
    },
};
 const V2TIMFriendGroup = {
    name:{
        type:"string"
    },
    friendCount:{
        type:"number"
    },
    friendIDList:{
        typee:"Array",
        arrayType:"string"
    }
};
 const V2TIMFriendOperationResult = {
    userID:{
        type:"string"
    },
    resultCode:{
        type:"number"
    },
    resultInfo:{
        type:"string"
    },
};
 const V2TIMMessageSearchResultItem = {
    conversationID:{
        type:"string",
        desc:"会话 ID"
    },
    messageCount:{
        type:"number",
        desc:"当前会话一共搜索到了多少条符合要求的消息"
    },
    messageList:{
        type:"Array",
        arrayType:V2TIMMessage
    }
};
 const V2TIMMessageReceipt = {
    userID:{
        type:"string",
        desc:"C2C 消息接收对象"
    },
    timestamp:{
        type:"number",
        desc:"C2C 对端用户标记会话已读的时间"
    },
    groupID:{
        type:"string"
    },
    msgID:{
        type:"string"
    },
    readCount:{
        type:"number",
        desc:"群消息已读人数"
    },
    unreadCount:{
        type:"number",
        desc:"群消息未读人数"
    }
};

// param
 const params = {
    initSDK:{
        param:{
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
        },
        response:{
            data:{
                type:"boolean",
                desc:"初始化是否成功"
            }
        }
        
    },
    unInitSDK:{
        param:{},
        response:{
            data:{
                type:"string",
                desc:""
            }
        }
    },
    getVersion:{
        param:{},
        response:{
            data:{
                type:"string",
                desc:"版本号"
            }
        }
    },
    getServerTime:{
        param:{},
        response:{
            data:{
                type:"number",
                desc:"服务器时间"
            }
        }
    },
    login:{
        param:{
            userID:{
                type:"string",
                required:true,
            },
            userSig:{
                type:"string",
                required:true,
                desc:"在控制台获取",
            }
        },
        response:{
            data:{
                type:"string",
                desc:""
            }
        }
    },
    logout:{
        param:{},
        response:{
            data:{
                type:"string",
                desc:""
            }
        }
    },
    getLoginUser:{
        param:{},
        response:{
            data:{
                type:"string",
                desc:"登录的用户id"
            }
        }
    },
    getLoginStatus:{
        param:{},
        response:{
            data:{
                type:"number",
                desc:"登录状态",
                option:{
                    1:"logged in",
                    2:"logging in",
                    3:"logout"
                }
            }
        }
    },
    createGroup:{
        param:{
            groupType:{
                type:"string",
                required:true,
                desc:"群组类型",
                option:{
                    Work:"工作群",
                    Public:"公开群",
                    Meeting:"会议群",
                    Community:"社群",
                    AVChatRoom:"直播群"
                }
            },
            groupID:{
                type:"string",
                required:false,
                default:null,
            },
            groupName:{
                type:"string",
                required:true,
                desc:"群组名称",
            },
            notification:{
                type:"string",
                required:false,
                default:"",
                desc:"群公告",
            },
            introduction:{
                type:"string",
                required:false,
                default:"",
                desc:"群介绍",
            },
            faceURL:{
                type:"string",
                required:false,
                default:null,
                desc:"群头像",
            },
            addOpt:{
                type:"number",
                required:false,
                default:1,
                option:{
                    0:"禁止加群",
                    1:"任何人可加群",
                    2:"加群需要群主或管理员审批"
                },
                desc:"群审批类型",
            },
            isAllMuted:{
                type:"boolean",
                required:false,
                default:false,
                desc:"全员禁言",
            },
            isSupportTopic:{
                type:"boolean",
                required:false,
                default:false,
                desc:"支持创建话题",
            },
            memberListMap:{
                type:"Array",
                arrayType:V2TIMCreateGroupMemberInfo,
                required:false,
                default:[],
                desc:"初始的群成员",
            },
        },
        response:{
            data:{
                type:"string",
                desc:"groupID"
            }
        }
    },
    joinGroup:{
        param:{
            message:{
                type:"string",
                required:false,
                default:"",
                desc:"入群信息"
            },
            groupID:{
                type:"string",
                required:true,
            }
        },
        response:{
            data:{
                type:"string",
                desc:""
            }
        }
    },
    quitGroup:{
        param:{
            groupID:{
                type:"string",
                required:true,
            }
        },
        response:{
            data:{
                type:"string",
                desc:""
            }
        }
    },
    dismissGroup:{
        param:{
            groupID:{
                type:"string",
                required:true,
            }
        },
        response:{
            data:{
                type:"string",
                desc:""
            }
        }
    },
    getUsersInfo:{
        param:{
            userIDList:{
                type:"Array",
                arrayType:"string",
                required:true,
            }
        },
        response:{
            data:{
                type:"Array",
                arrayType:V2TIMUserFullInfo,
                desc:""
            }
        }
    },
    getUserStatus:{
        param:{
            userIDList:{
                type:"Array",
                arrayType:"string",
                required:true,
            }
        },
        response:{
            data:{
                type:"Array",
                arrayType:V2TIMUserStatus,
                desc:""
            }
        }
    },
    setSelfInfo:{
        param:{
            nickName:{
                type:"string",
                required:false,
                default:null
            },
            faceURL:{
                type:"string",
                required:false,
                default:null
            },
            selfSignature:{
                type:"string",
                required:false,
                default:null
            },
            gender:{
                type:"number",
                required:false,
                default:null,
                option:{
                    0:"unknown",
                    1:"male",
                    2:"female"
                }
            },
            allowType:{
                type:"number",
                required:false,
                default:null,
                option:{
                    0:"allow any",
                    1:"deny any",
                    2:"need confirm"
                }
            },
            role:{
                type:"number",
                required:false,
                default:null
            },
            level:{
                type:"number",
                required:false,
                default:null
            },
            birthday:{
                type:"number",
                required:false,
                default:null
            },
            customInfo:{
                type:"object",
                required:false,
                default:{}
            },
        },
        response:{
            data:{
                type:"Array",
                arrayType:V2TIMUserFullInfo,
                desc:""
            }
        }
    },
    setSelfStatus:{
        param:{
            status:{
                type:"string",
                required:true,
            }
        },
        response:{
            data:{
                type:"string",
                desc:""
            }
        }
    },
    subscribeUserStatus:{
        param:{
            userIDList:{
                type:"Array",
                arrayType:"string",
                required:true,
            }
        },
        response:{
            data:{
                type:"string",
                desc:""
            }
        }
    },
    unsubscribeUserStatus:{
        param:{
            userIDList:{
                type:"Array",
                arrayType:"string",
                required:true,
            }
        },
        response:{
            data:{
                type:"string",
                desc:""
            }
        }
    },
    createTextMessage:{
        param:{
            text:{
                type:"string",
                required:true,
                desc:""
            }
        },
        response:{
            data:{
                type:"object",
                component:{
                  id:{
                    type:"string",
                    desc:"message ID"
                  },
                  messageInfo:{
                    type:V2TIMMessage
                  }  
                },
                desc:""
            }
        }
    },
    createTextAtMessage:{
        param:{
            text:{
                type:"string",
                required:true,
                desc:""
            },
            atUserList:{
                type:"Array",
                arrayType:"string",
                required:true
            }
        },
        response:{
            data:{
                type:"object",
                component:{
                  id:{
                    type:"string",
                    desc:"message ID"
                  },
                  messageInfo:{
                    type:V2TIMMessage
                  }  
                },
                desc:""
            }
        }
    },
    createCustomMessage:{
        param:{
            data:{
                type:"string",
                required:true,
                desc:""
            },
            desc:{
                type:"string",
                required:false,
                default:""
            },
            extension:{
                type:"string",
                required:false,
                default:""
            }
        },
        response:{
            data:{
                type:"object",
                component:{
                  id:{
                    type:"string",
                    desc:"message ID"
                  },
                  messageInfo:{
                    type:V2TIMMessage
                  }  
                },
                desc:""
            }
        }
    },
    createImageMessage:{
        param:{
            imagePath:{
                type:"string",
                required:true,
                desc:""
            },
        },
        response:{
            data:{
                type:"object",
                component:{
                  id:{
                    type:"string",
                    desc:"message ID"
                  },
                  messageInfo:{
                    type:V2TIMMessage
                  }  
                },
                desc:""
            }
        }
    },
    createSoundMessage:{
        param:{
            soundPath:{
                type:"string",
                required:true,
                desc:""
            },
            duration:{
                type:"number",
                required:true,
                desc:""
            },
        },
        response:{
            data:{
                type:"object",
                component:{
                  id:{
                    type:"string",
                    desc:"message ID"
                  },
                  messageInfo:{
                    type:V2TIMMessage
                  }  
                },
                desc:""
            }
        }
    },
    createVideoMessage:{
        param:{
            videoFilePath:{
                type:"string",
                required:true,
                desc:""
            },
            duration:{
                type:"number",
                required:true,
                desc:""
            },
            type:{
                type:"string",
                required:true,
                desc:""
            },
            snapshotPath:{
                type:"string",
                required:true,
                desc:""
            },
        },
        response:{
            data:{
                type:"object",
                component:{
                  id:{
                    type:"string",
                    desc:"message ID"
                  },
                  messageInfo:{
                    type:V2TIMMessage
                  }  
                },
                desc:""
            }
        }
    },
    createFileMessage:{
        param:{
            filePath:{
                type:"string",
                required:true,
                desc:""
            },
            fileName:{
                type:"string",
                required:true,
                desc:""
            },
        },
        response:{
            data:{
                type:"object",
                component:{
                  id:{
                    type:"string",
                    desc:"message ID"
                  },
                  messageInfo:{
                    type:V2TIMMessage
                  }  
                },
                desc:""
            }
        }
    },
    createLocationMessage:{
        param:{
            desc:{
                type:"string",
                required:true,
                desc:""
            },
            longitude:{
                type:"number",
                required:true,
                desc:""
            },
            latitude:{
                type:"number",
                required:true,
                desc:""
            },
        },
        response:{
            data:{
                type:"object",
                component:{
                  id:{
                    type:"string",
                    desc:"message ID"
                  },
                  messageInfo:{
                    type:V2TIMMessage
                  }  
                },
                desc:""
            }
        }
    },
    createFaceMessage:{
        param:{
            desc:{
                type:"string",
                required:true,
                desc:"自定义数据"
            },
            index:{
                type:"number",
                required:true,
                desc:"表情索引"
            },
        },
        response:{
            data:{
                type:"object",
                component:{
                  id:{
                    type:"string",
                    desc:"message ID"
                  },
                  messageInfo:{
                    type:V2TIMMessage
                  }  
                },
                desc:""
            }
        }
    },
    createMergerMessage:{
        param:{
            msgIDList:{
                type:"Array",
                arrayType:"string",
                required:true,
                desc:""
            },
            title:{
                type:"string",
                required:true,
                desc:"合并消息的来源"
            },
            abstractList:{
                type:"Array",
                arrayType:"string",
                required:true,
                desc:"合并消息的摘要列表"
            },
            compatibleText:{
                type:"string",
                required:true,
                desc:""
            },
        },
        response:{
            data:{
                type:"object",
                component:{
                  id:{
                    type:"string",
                    desc:"message ID"
                  },
                  messageInfo:{
                    type:V2TIMMessage
                  }  
                },
                desc:""
            }
        }
    },
    createForwardMessage:{
        param:{
            msgID:{
                type:"string",
                required:true,
                desc:""
            },
        },
        response:{
            data:{
                type:"object",
                component:{
                  id:{
                    type:"string",
                    desc:"message ID"
                  },
                  messageInfo:{
                    type:V2TIMMessage
                  }  
                },
                desc:""
            }
        }
    },
    createTargetedGroupMessage:{
        param:{
            msgID:{
                type:"string",
                required:true,
                desc:""
            },
            receiverList:{
                type:"Array",
                arrayType:"string",
                required:true,
                desc:""
            },
        },
        response:{
            data:{
                type:"object",
                component:{
                  id:{
                    type:"string",
                    desc:"message ID"
                  },
                  messageInfo:{
                    type:V2TIMMessage
                  }  
                },
                desc:""
            }
        }
    },
    sendMessage:{
        param:{
            id:{
                type:"string",
                required:true,
                desc:""
            },
            receiver:{
                type:"string",
                required:false,
                default:null,
                desc:""
            },
            groupID:{
                type:"string",
                required:false,
                default:null,
                desc:""
            },
            priority:{
                type:"number",
                required:false,
                default:0,
                option:{
                    0:"default",
                    1:"high",
                    2:"normal",
                    3:"low"
                },
                desc:""
            },
            onlineUserOnly:{
                type:"boolean",
                required:false,
                default:false,
                desc:""
            },
            offlinePushInfo:{
                type:V2TIMOfflinePushInfo,
                required:false,
                default:{}
            }
        },
        response:{
            data:{
                type:V2TIMMessage,
                desc:""
            }
        }
    },
    downloadMessage:{
        param:{
            msgID:{
                type:"string",
                required:true,
                desc:"所要下载的message ID"
            },
            imageType:{
                type:"number",
                required:false,
                default:0,
                desc:"图片类型，所下载的message为图片消息时有效"
            },
            isSnapshot:{
                type:"boolean",
                required:false,
                default:false,
                desc:"是否为视频封面，所下载的message为视频时有效"
            }
        },
        response:{
            data:{
                type:"string",
                desc:"只返回成功与否，安卓下载位置为/sdcard/uzmap/appid/...,iOS为app的临时目录文件下"
            }
        }
    },
    getMessageOnlineUrl:{
        param:{
            msgID:{
                type:"string",
                required:true,
                desc:""
            }
        },
        response:{
            data:{
                type:"Object",
                desc:"根据msgID对应的消息返回 imageElem、videoElem、soundElem或fileElem"
            }
        }
    },
    setC2CReceiveMessageOpt:{
        param:{
            userIDList:{
                type:"Array",
                arrayType:"string",
                required:true,
                desc:""
            },
            opt:{
                type:"number",
                required:true,
                option:{
                    0:"在线正常接收消息",
                    1:"不会接收到消息",
                    2:"在线正常接收消息，离线不会有推送通知"
                },
                desc:"消息接收选项"
            },
        },
        response:{
            data:{
                type:"string",
                desc:""
            }
        }
    },
    getC2CReceiveMessageOpt:{
        param:{
            userIDList:{
                type:"Array",
                arrayType:"string",
                required:true,
                desc:""
            },
        },
        response:{
            data:{
                type:"Array",
                arrayType:V2TIMReceiveMessageOptInfo,
                desc:""
            }
        }
    },
    setGroupReceiveMessageOpt:{
        param:{
            groupID:{
                type:"string",
                required:true,
                desc:""
            },
            opt:{
                type:"number",
                required:true,
                option:{
                    0:"在线正常接收消息",
                    1:"不会接收到消息",
                    2:"在线正常接收消息，离线不会有推送通知"
                },
                desc:"消息接收选项"
            },
        },
        response:{
            data:{
                type:"string",
                desc:""
            }
        }
    },
    getC2CHistoryMessageList:{
        param:{
            userID:{
                type:"string",
                required:true,
                desc:""
            },
            count:{
                type:"number",
                required:true,
                desc:""
            },
            lastMsgID:{
                type:"string",
                required:true,
                desc:"获取消息的起始消息"
            },
        },
        response:{
            data:{
                type:"Array",
                arrayType:V2TIMMessage,
                desc:""
            }
        }
    },
    getGroupHistoryMessageList:{
        param:{
            groupID:{
                type:"string",
                required:true,
                desc:""
            },
            count:{
                type:"number",
                required:true,
                desc:""
            },
            lastMsgID:{
                type:"string",
                required:true,
                desc:"获取消息的起始消息"
            },
        },
        response:{
            data:{
                type:"Array",
                arrayType:V2TIMMessage,
                desc:""
            }
        }
    },
    getHistoryMessageList:{
        param:{
            lastMsgID:{
                type:"string",
                required:false,
                default:null,
                desc:""
            },
            getType:{
                type:"number",
                required:true,
                option:{
                    1:"获取云端更老的消息",
                    2:"获取云端更新的消息",
                    3:"获取本地更老的消息",
                    4:"获取本地更新的消息"
                },
                desc:""
            },
            userID:{
                type:"string",
                required:false,
                desc:"获取消息的起始消息",
                default:null
            },
            groupID:{
                type:"string",
                required:false,
                desc:"",
                default:null
            },
            count:{
                type:"number",
                required:true,
                desc:""
            },
            lastMsgSeq:{
                type:"number",
                required:false,
                desc:"获取消息的起始消息",
                default:-1
            },
            messageTypeList:{
                type:"Array",
                arrayType:"number",
                required:false,
                default:null,
                option:{
                    3:"获取本地更老的消息",
                    4:"获取本地更新的消息"
                },
                desc:"拉取的消息类型集合"
            },
        },
        response:{
            data:{
                type:"Array",
                arrayType:V2TIMMessage,
                desc:""
            }
        }
    },
    revokeMessage:{
        param:{
            lastMsgID:{
                type:"string",
                required:true,
                desc:""
            },
        },
        response:{
            data:{
                type:"string",
                desc:""
            }
        }
    },
    modifyMessage:{
        param:{
            message:{
                type:V2TIMMessage,
                required:true,
                desc:""
            },
        },
        response:{
            data:{
                type:"object",
                component:{
                    code:{
                        type:"number"
                    },
                    desc:{
                        type:"string"
                    },
                    message:{
                        type:V2TIMMessage
                    }
                },
                desc:""
            }
        }
    },
    markC2CMessageAsRead:{
        param:{
            userID:{
                type:"string",
                required:true,
                desc:""
            },
        },
        response:{
            data:{
                type:"string",
                desc:""
            }
        }
    },
    markGroupMessageAsRead:{
        param:{
            groupID:{
                type:"string",
                required:true,
                desc:""
            },
        },
        response:{
            data:{
                type:"string",
                desc:""
            }
        }
    },
    markAllMessageAsRead:{
        param:{},
        response:{
            data:{
                type:"string",
                desc:""
            }
        }
    },
    deleteMessageFromLocalStorage:{
        param:{
            msgID:{
                type:"string",
                required:true,
                desc:""
            },
        },
        response:{
            data:{
                type:"string",
                desc:""
            }
        }
    },
    deleteMessages:{
        param:{
            msgIDs:{
                type:"Array",
                arrayType:"string",
                required:true,
            }
        },
        response:{
            data:{
                type:"string",
                desc:""
            }
        }
    },
    clearC2CHistoryMessage:{
        param:{
            userID:{
                type:"string",
                required:true,
                desc:""
            },
        },
        response:{
            data:{
                type:"string",
                desc:""
            }
        }
    },
    clearGroupHistoryMessage:{
        param:{
            groupID:{
                type:"string",
                required:true,
                desc:""
            },
        },
        response:{
            data:{
                type:"string",
                desc:""
            }
        }
    },
    insertGroupMessageToLocalStorage:{
        param:{
            groupID:{
                type:"string",
                required:true,
                desc:""
            },
            data:{
                type:"string",
                required:true,
                desc:"发送的消息内容"
            },
            sender:{
                type:"string",
                required:true,
                desc:""
            },
        },
        response:{
            data:{
                type:V2TIMMessage,
                desc:""
            }
        }
    },
    insertC2CMessageToLocalStorage:{
        param:{
            userID:{
                type:"string",
                required:true,
                desc:""
            },
            data:{
                type:"string",
                required:true,
                desc:"发送的消息内容"
            },
            sender:{
                type:"string",
                required:true,
                desc:""
            },
        },
        response:{
            data:{
                type:V2TIMMessage,
                desc:""
            }
        }
    },
    findMessages:{
        param:{
            messageIDList:{
                type:"Array",
                arrayType:"string",
                required:true,
                desc:""
            },
        },
        response:{
            data:{
                type:V2TIMMessage,
                desc:""
            }
        }
    },
    searchLocalMessages:{
        param:{
            searchParam:{
                type:"object",
                required:true,
                component:{
                    keywordList:{
                        type:"Array",
                        arrayType:"string",
                        required:false,
                        default:null,
                        des:""
                    },
                    conversationID:{
                        type:"string",
                        required:false,
                        default:null,
                        des:""
                    },
                    messageTypeList:{
                        type:"Array",
                        arrayType:"number",
                        required:false,
                        option:{
                            1:"text",
                            2:"custom",
                            3:"image",
                            4:"sound",
                            5:"video",
                            6:"file",
                            7:"location",
                            8:"face",
                            9:"group tips",
                            10:"merger"
                        },
                        default:null,
                        des:""
                    },
                    type:{
                        type:"number",
                        required:false,
                        default:0,
                        option:{
                            0:"or",
                            1:"and"
                        },
                        des:""
                    },
                    pageSize:{
                        type:"number",
                        required:false,
                        default:0,
                        des:""
                    },
                    searchTimePosition:{
                        type:"number",
                        required:false,
                        default:0,
                        des:""
                    },
                    pageIndex:{
                        type:"number",
                        required:false,
                        default:0,
                        des:""
                    },
                    searchTimePeriod:{
                        type:"Array",
                        arrayType:"string",
                        required:false,
                        default:0,
                        des:""
                    },
                    userIDList:{
                        type:"Array",
                        arrayType:"string",
                        required:false,
                        default:null,
                        des:""
                    },
                },
                desc:""
            },
        },
        response:{
            data:{
                type:"object",
                component:{
                    totalCount:{
                        type:"number"
                    },
                    messageSearchResultItems:{
                        type:"Array",
                        arrayType:V2TIMMessageSearchResultItem
                    }
                },
                desc:""
            }
        }
    },
    sendMessageReadReceipts:{
        param:{
            messageIDList:{
                type:"Array",
                arrayType:"string",
                required:true,
                desc:""
            },
        },
        response:{
            data:{
                type:"string",
                desc:""
            }
        }
    },
    getMessageReadReceipts:{
        param:{
            messageIDList:{
                type:"Array",
                arrayType:"string",
                required:true,
                desc:""
            },
        },
        response:{
            data:{
                type:"Array",
                arrayType:V2TIMMessageReceipt,
                desc:""
            }
        }
    },
    getGroupMessageReadMemberList:{
        param:{
            messageID:{
                type:"string",
                required:true,
                desc:""
            },
            filter:{
                type:"number",
                required:false,
                option:{
                    0:'filter read',
                    1:"filter unread"
                },
                default:0,
                desc:""
            },
            nextSeq:{
                type:"number",
                required:false,
                default:0,
                desc:""
            },
            count:{
                type:"number",
                required:false,
                default:20,
                desc:""
            }
        },
        response:{
            data:{
                type:"object",
                component:{
                    nextSeq:{
                        type:"number"
                    },
                    isFinished:{
                        type:"boolean"
                    },
                    memberInfoList:{
                        type:"Array",
                        arrayType:V2TIMGroupMemberInfo
                    }
                },
                desc:""
            }
        }
    },
    setMessageExtensions:{
        param:{
            msgID:{
                type:"string",
                required:true,
                desc:""
            },
            extensions:{
                type:"Array",
                required:true,
                desc:"",
                arrayType:V2TIMExtension
            },
        },
        response:{
            data:{
                type:"Array",
                arrayType:V2TIMMessageExtensionResult,
                desc:""
            }
        }
    },
    getMessageExtensions:{
        param:{
            msgID:{
                type:"string",
                required:true,
                desc:""
            },
        },
        response:{
            data:{
                type:"Array",
                arrayType:V2TIMExtension,
                desc:""
            }
        }
    },
    deleteMessageExtensions:{
        param:{
            msgID:{
                type:"string",
                required:true,
                desc:""
            },
            keys:{
                type:"Array",
                arrayType:"string",
                required:true,
                desc:""
            },
        },
        response:{
            data:{
                type:"Array",
                arrayType:V2TIMMessageExtensionResult,
                desc:""
            }
        }
    },
    // V2TIMGroupManager
    getJoinedGroupList:{
        param:{},
        response:{
            data:{
                type:"Array",
                arrayType:V2TIMGroupInfo,
                desc:""
            }
        }
    },
    getGroupsInfo:{
        param:{
            groupIDList:{
                type:"Array",
                arrayType:"string",
                required:true,
                desc:""
            },
        },
        response:{
            data:{
                type:"Array",
                arrayType:V2TIMGroupInfoResult,
                desc:""
            }
        }
    },
    searchGroups:{
        param:{
            searchParam:{
                type:"object",
                component:{
                    keywordList:{
                        type:"Array",
                        arrayType:"string"
                    },
                    isSearchGroupID:{
                        type:"boolean"
                    },
                    isSearchGroupName:{
                        type:"boolean"
                    }
                },
                required:true,
                desc:""
            },
        },
        response:{
            data:{
                type:"Array",
                arrayType:V2TIMGroupInfo,
                desc:""
            }
        }
    },
    setGroupInfo:{
        param:{
            info:{
                type:V2TIMGroupInfo,
                required:true,
                desc:""
            },
        },
        response:{
            data:{
                type:"string",
                desc:""
            }
        }
    },
    initGroupAttributes:{
        param:{
            groupID:{
                type:"string",
                required:true,
                desc:""
            },
            attributes:{
                type:"object",
                required:true,
                desc:""
            },
        },
        response:{
            data:{
                type:"string",
                desc:""
            }
        }
    },
    setGroupAttributes:{
        param:{
            groupID:{
                type:"string",
                required:true,
                desc:""
            },
            attributes:{
                type:"object",
                required:true,
                desc:""
            },
        },
        response:{
            data:{
                type:"string",
                desc:""
            }
        }
    },
    deleteGroupAttributes:{
        param:{
            groupID:{
                type:"string",
                required:true,
                desc:""
            },
            keys:{
                type:"Array",
                arrayType:"string",
                required:false,
                default:null,
                desc:""
            },
        },
        response:{
            data:{
                type:"string",
                desc:""
            }
        }
    },
    getGroupAttributes:{
        param:{
            groupID:{
                type:"string",
                required:true,
                desc:""
            },
            keys:{
                type:"Array",
                arrayType:"string",
                required:false,
                default:null,
                desc:""
            },
        },
        response:{
            data:{
                type:"object",
                desc:""
            }
        }
    },
    getGroupOnlineMemberCount:{
        param:{
            groupID:{
                type:"string",
                required:true,
                desc:""
            },
        },
        response:{
            data:{
                type:"number",
                desc:"在线人数"
            }
        }
    },
    getGroupMemberList:{
        param:{
            groupID:{
                type:"string",
                required:true,
                desc:""
            },
            filter:{
                type:"number",
                required:false,
                default:0x00,
                option:{
                    0x00:"filter all",
                    0x01:"filter owner",
                    0x02:"filter admin",
                    0x04:"filter common"
                },
                desc:""
            },
            nextSeq:{
                type:"number",
                required:false,
                default:0,
                desc:""
            },
        },
        response:{
            data:{
                type:"number",
                desc:"在线人数"
            }
        }
    },
    getGroupMembersInfo:{
        param:{
            groupID:{
                type:"string",
                required:true,
                desc:""
            },
            memberList:{
                type:"Array",
                required:true,
                arrayType:"string",
                desc:""
            },
        },
        response:{
            data:{
                type:"Array",
                arrayType:V2TIMGroupMemberFullInfo,
                desc:""
            }
        }
    },
    searchGroupMembers:{
        param:{
            param:{
                type:"object",
                component:{
                    keywordList:{
                        type:"Array",
                        arrayType:"string",
                        required:true,
                        desc:""
                    },
                    groupIDList:{
                        type:"Array",
                        arrayType:"string",
                        required:false,
                        default:null,
                        desc:""
                    },
                    isSearchMemberUserID:{
                        type:"boolean",
                        required:true,
                        desc:""
                    },
                    isSearchMemberNickName:{
                        type:"boolean",
                        required:true,
                        desc:""
                    },
                    isSearchMemberRemark:{
                        type:"boolean",
                        required:true,
                        desc:""
                    },
                    isSearchMemberNameCard:{
                        type:"boolean",
                        required:true,
                        desc:""
                    },
                }
            }
            
        },
        response:{
            data:{
                type:"Array",
                arrayType:V2TIMGroupMemberFullInfo,
                desc:""
            }
        }
    },
    setGroupMemberInfo:{
        param:{
            groupID:{
                type:"string",
                required:true,
                desc:""
            },
            userID:{
                type:"string",
                required:true,
                desc:""
            },
            nameCard:{
                type:"string",
                required:true,
                desc:""
            },
            customInfo:{
                type:"object",
                required:false,
                default:{},
                desc:""
            },
        },
        response:{
            data:{
                type:"string",
                desc:""
            }
        }
    },
    muteGroupMember:{
        param:{
            groupID:{
                type:"string",
                required:true,
                desc:""
            },
            userID:{
                type:"string",
                required:true,
                desc:""
            },
            seconds:{
                type:"number",
                required:true,
                desc:""
            },
        },
        response:{
            data:{
                type:"string",
                desc:""
            }
        }
    },
    inviteUserToGroup:{
        param:{
            groupID:{
                type:"string",
                required:true,
                desc:""
            },
            userList:{
                type:"Array",
                arrayType:"string",
                required:true,
                desc:""
            },
        },
        response:{
            data:{
                type:"Array",
                arrayType:V2TIMInviteUserToGroupResult,
                desc:""
            }
        }
    },
    kickGroupMember:{
        param:{
            groupID:{
                type:"string",
                required:true,
                desc:""
            },
            memberList:{
                type:"Array",
                arrayType:"string",
                required:true,
                desc:""
            },
            reason:{
                type:"string",
                required:true,
                desc:""
            },
        },
        response:{
            data:{
                type:"Array",
                arrayType:V2TIMInviteUserToGroupResult,
                desc:""
            }
        }
    },
    setGroupMemberRole:{
        param:{
            groupID:{
                type:"string",
                required:true,
                desc:""
            },
            userID:{
                type:"string",
                required:true,
                desc:""
            },
            role:{
                type:"number",
                option:{
                    200:"member",
                    300:"admin",
                    400:"owner"
                },
                required:true,
                desc:""
            },
        },
        response:{
            data:{
                type:"string",
                desc:""
            }
        }
    },
    markGroupMemberList:{
        param:{
            groupID:{
                type:"string",
                required:true,
                desc:""
            },
            memberIDList:{
                type:"Array",
                arrayType:"string",
                required:true,
                desc:""
            },
            enableMark:{
                type:"boolean",
                required:true,
                desc:"true-添加标记,false-移除标记"
            },
            markType:{
                type:"number",
                required:true,
                desc:""
            },
        },
        response:{
            data:{
                type:"string",
                desc:""
            }
        }
    },
    transferGroupOwner:{
        param:{
            groupID:{
                type:"string",
                required:true,
                desc:""
            },
            userID:{
                type:"string",
                required:true,
                desc:""
            },
        },
        response:{
            data:{
                type:"string",
                desc:""
            }
        }
    },
    getGroupApplicationList:{
        param:{},
        response:{
            data:{
                type:"object",
                component:{
                    unreadCount:{
                        type:"number"
                    },
                    groupApplicationList:{
                        type:"Array",
                        arrayType:V2TIMGroupApplication
                    }
                },
                desc:""
            }
        }
    },
    acceptGroupApplication:{
        param:{
            groupID:{
                type:"string",
                required:true,
                desc:""
            },
            fromUser:{
                type:"string",
                required:true,
                desc:""
            },
            toUser:{
                type:"string",
                required:true,
                desc:""
            },
            reason:{
                type:"string",
                required:true,
                desc:""
            },
        },
        response:{
            data:{
                type:"string",
                desc:""
            }
        }
    },
    refuseGroupApplication:{
        param:{
            groupID:{
                type:"string",
                required:true,
                desc:""
            },
            fromUser:{
                type:"string",
                required:true,
                desc:""
            },
            toUser:{
                type:"string",
                required:true,
                desc:""
            },
            reason:{
                type:"string",
                required:true,
                desc:""
            },
        },
        response:{
            data:{
                type:"string",
                desc:""
            }
        }
    },
    setGroupApplicationRead:{
        param:{},
        response:{
            data:{
                type:"string",
                desc:""
            }
        }
    },
    getJoinedCommunityList:{
        param:{},
        response:{
            data:{
                type:"Array",
                arrayType:V2TIMGroupInfo,
                desc:""
            }
        }
    },
    createTopicInCommunity:{
        param:{
            groupID:{
                type:"string",
                required:true,
                desc:""
            },
            topicInfo:{
                type:V2TIMTopicInfo,
                required:true,
                desc:""
            },
        },
        response:{
            data:{
                type:"Array",
                arrayType:V2TIMGroupInfo,
                desc:""
            }
        }
    },
    deleteTopicFromCommunity:{
        param:{
            groupID:{
                type:"string",
                required:true,
                desc:""
            },
            topicIDList:{
                type:"Array",
                arrayType:"string",
                required:true,
                desc:""
            },
        },
        response:{
            data:{
                type:"Array",
                arrayType:V2TIMTopicResult,
                desc:""
            }
        }
    },
    setTopicInfo:{
        param:{
            groupID:{
                type:"string",
                required:true,
                desc:""
            },
            topicInfo:{
                type:V2TIMTopicInfo,
                required:true,
                desc:""
            },
        },
        response:{
            data:{
                type:"string",
                desc:""
            }
        }
    },
    getTopicInfoList:{
        param:{
            groupID:{
                type:"string",
                required:true,
                desc:""
            },
            topicIDList:{
                type:"Array",
                arrayType:"string",
                required:true,
                desc:""
            },
        },
        response:{
            data:{
                type:"Array",
                arrayType:V2TIMTopicResult,
                desc:""
            }
        }
    },
    // signaling manager
    invite:{
        param:{
            invitee:{
                type:"string",
                required:true
            },
            data:{
                type:"string",
                required:true
            },
            onlineUserOnly:{
                type:"boolean",
                required:true
            },
            timeout:{
                type:"number",
                required:true
            },
        },
        response:{
            data:{
                type:"string",
                desc:""
            }
        }
    },
    inviteInGroup:{
        param:{
            groupID:{
                type:"string",
                required:true
            },
            data:{
                type:"string",
                required:true
            },
            onlineUserOnly:{
                type:"boolean",
                required:true
            },
            timeout:{
                type:"number",
                required:true
            },
            inviteeList:{
                type:"Array",
                arrayType:"string",
                required:true
            },
        },
        response:{
            data:{
                type:"string",
                desc:""
            }
        }
    },
    cancel:{
        param:{
            inviteID:{
                type:"string",
                required:true
            },
            data:{
                type:"string",
                required:true
            },
        },
        response:{
            data:{
                type:"string",
                desc:""
            }
        }
    },
    accept:{
        param:{
            inviteID:{
                type:"string",
                required:true
            },
            data:{
                type:"string",
                required:true
            },
        },
        response:{
            data:{
                type:"string",
                desc:""
            }
        }
    },
    reject:{
        param:{
            inviteID:{
                type:"string",
                required:true
            },
            data:{
                type:"string",
                required:true
            },
        },
        response:{
            data:{
                type:"string",
                desc:""
            }
        }
    },
    getSignalingInfo:{
        param:{
            msgID:{
                type:"string",
                required:true
            },
        },
        response:{
            data:{
                type:V2TIMSignalingInfo,
                desc:""
            }
        }
    },
    addInvitedSignaling:{
        param:{
            info:{
                type:V2TIMSignalingInfo,
                required:true
            },
        },
        response:{
            data:{
                type:"string",
                desc:""
            }
        }
    },
    // conversation manager
    getConversationList:{
        param:{
            nextSeq:{
                type:"number",
                required:false,
                default:0
            },
            count:{
                type:"number",
                required:true
            }
        },
        response:{
            data:{
                type:"object",
                component:{
                    nextSeq:{
                        type:"number"
                    },
                    isFinished:{
                        type:"boolean"
                    },
                    conversationList:{
                        type:"Array",
                        arrayType:V2TIMConversation
                    },
                },
                desc:""
            }
        }
    },
    getConversationListByConversaionIds:{
        param:{
            conversationIDList:{
                type:"Array",
                arrayType:"string",
                required:true,
            },
        },
        response:{
            data:{
                type:"object",
                component:{
                    nextSeq:{
                        type:"number"
                    },
                    isFinished:{
                        type:"boolean"
                    },
                    conversationList:{
                        type:"Array",
                        arrayType:V2TIMConversation
                    },
                },
                desc:""
            }
        }
    },
    getConversation:{
        param:{
            conversationID:{
                type:"string",
                required:true,
            },
        },
        response:{
            data:{
                type:V2TIMConversation,
                desc:""
            }
        }
    },
    getConversationListByFilter:{
        param:{
            filter:{
                type:"object",
                required:true,
                component:{
                    groupName:{
                        type:"string",
                        required:true
                    },
                    conversationType:{
                        type:"number",
                        required:false,
                        default:0
                    },
                    nextSeq:{
                        type:"number",
                        required:false,
                        default:0,
                    },
                    count:{
                        type:"number",
                        required:true
                    },
                    markType:{
                        type:"number",
                        required:false,
                        default:0
                    },
                }
            }
        },
        response:{
            data:{
                type:"object",
                component:{
                    nextSeq:{
                        type:"number"
                    },
                    isFinished:{
                        type:"boolean"
                    },
                    conversationList:{
                        type:"Array",
                        arrayType:V2TIMConversation
                    },
                },
                desc:""
            }
        }
    },
    deleteConversation:{
        param:{
            conversationID:{
                type:"string",
                required:true,
            },
        },
        response:{
            data:{
                type:"string",
                desc:""
            }
        }
    },
    setConversationDraft:{
        param:{
            conversationID:{
                type:"string",
                required:true,
            },
            draftText:{
                type:"string",
                required:true,
            },
        },
        response:{
            data:{
                type:"string",
                desc:""
            }
        }
    },
    setConversationCustomData:{
        param:{
            conversationIDList:{
                type:"Array",
                arrayType:"string",
                required:true,
            },
            customData:{
                type:"string",
                required:true,
            },
        },
        response:{
            data:{
                type:"Array",
                arrayType:V2TIMConversationResult,
                desc:""
            }
        }
    },
    pinConversation:{
        param:{
            conversationID:{
                type:"string",
                required:true,
            },
            isPinned:{
                type:"boolean",
                required:true,
            },
        },
        response:{
            data:{
                type:"string",
                desc:""
            }
        }
    },
    markConversation:{
        param:{
            conversationIDList:{
                type:"Array",
                arrayType:"string",
                required:true,
            },
            enableMark:{
                type:"boolean",
                required:true,
            },
            markType:{
                type:"number",
                required:true,
            },
        },
        response:{
            data:{
                type:"Array",
                arrayType:V2TIMConversationResult,
                desc:""
            }
        }
    },
    getTotalUnreadMessageCount:{
        param:{},
        response:{
            data:{
                type:"number",
                desc:""
            }
        }
    },
    createConversationGroup:{
        param:{
            conversationIDList:{
                type:"Array",
                arrayType:"string",
                required:true,
            },
            groupName:{
                type:"string",
                required:true,
            },
        },
        response:{
            data:{
                type:"Array",
                arrayType:V2TIMConversationResult,
                desc:""
            }
        }
    },
    getConversationGroupList:{
        param:{},
        response:{
            data:{
                type:"Array",
                arrayType:"string",
                desc:"conversation id list"
            }
        }
    },
    deleteConversationGroup:{
        param:{
            groupName:{
                type:"string",
                required:true,
            },
        },
        response:{
            data:{
                type:"string",
                desc:""
            }
        }
    },
    renameConversationGroup:{
        param:{
            oldName:{
                type:"string",
                required:true,
            },
            newName:{
                type:"string",
                required:true,
            },
        },
        response:{
            data:{
                type:"string",
                desc:""
            }
        }
    },
    addConversationsToGroup:{
        param:{
            groupName:{
                type:"string",
                required:true,
            },
            conversationIDList:{
                type:"Array",
                arrayType:"string",
                required:true,
            },
        },
        response:{
            data:{
                type:"Array",
                arrayType:V2TIMConversationResult,
                desc:""
            }
        }
    },
    deleteConversationsFromGroup:{
        param:{
            groupName:{
                type:"string",
                required:true,
            },
            conversationIDList:{
                type:"Array",
                arrayType:"string",
                required:true,
            },
        },
        response:{
            data:{
                type:"Array",
                arrayType:V2TIMConversationResult,
                desc:""
            }
        }
    },
    // friendship manager
    getFriendList:{
        param:{},
        response:{
            data:{
                type:"Array",
                arrayType:V2TIMFriendInfo,
                desc:""
            }
        }
    },
    getFriendsInfo:{
        param:{
            userIDList:{
                type:"Array",
                arrayType:"string",
                required:true,
            },
        },
        response:{
            data:{
                type:"Array",
                arrayType:V2TIMFriendInfoResult,
                desc:""
            }
        }
    },
    setFriendInfo:{
        param:{
            userID:{
                type:"string",
                required:true,
            },
            friendRemark:{
                type:"string",
                required:false,
                default:""
            },
            friendCustomInfo:{
                type:"object",
                required:false,
                default:{}
            }
        },
        response:{
            data:{
                type:"string",
                desc:""
            }
        }
    },
    searchFriends:{
        param:{
            searchParam:{
                type:"object",
                component:{
                    keywordList:{
                        type:"Array",
                        arrayType:"string",
                        required:true
                    },
                    isSearchNickName:{
                        type:"boolean",
                        required:true
                    },
                    isSearchUserID:{
                        type:"boolean",
                        required:true
                    },
                    isSearchRemark:{
                        type:"boolean",
                        required:true
                    },
                },
                required:true,
            },
        },
        response:{
            data:{
                type:"Array",
                arrayType:V2TIMFriendInfoResult,
                desc:""
            }
        }
    },
    addFriend:{
        param:{
            userID:{
                type:"string",
                required:true,
            },
            addType:{
                type:"number",
                required:true,
                option:{
                    1:"single",
                    2:"both"
                }
            },
            remark:{
                type:"string",
                required:false,
                default:""
            },
            addWording:{
                type:"string",
                required:false,
                default:""
            },
            addSource:{
                type:"string",
                required:false,
                default:""
            },
        },
        response:{
            data:{
                type:V2TIMFriendOperationResult,
                desc:""
            }
        }
    },
    deleteFromFriendList:{
        param:{
            userIDList:{
                type:"string",
                required:true,
            },
            deleteType:{
                type:"number",
                required:true,
                option:{
                    1:"single",
                    2:"both"
                }
            },
        },
        response:{
            data:{
                type:"Array",
                arrayType:V2TIMFriendOperationResult,
                desc:""
            }
        }
    },
    checkFriend:{
        param:{
            userIDList:{
                type:"Array",
                arrayType:"string",
                required:true,
            },
            checkType:{
                type:"number",
                required:true,
                option:{
                    1:"single",
                    2:"both"
                }
            },
        },
        response:{
            data:{
                type:"Array",
                arrayType:V2TIMCheckFriendResult,
                desc:""
            }
        }
    },
    getFriendApplicationList:{
        param:{},
        response:{
            data:{
                type:"object",
                component:{
                    unreadCount:{
                        type:"number"
                    },
                    friendApplicationList:{
                        type:"Array",
                        arrayType:"number",
                        option:{
                            1:"别人发给我的加好友请求",
                            2:"我发给别人的加好友请求",
                            3:"别人发给我的和我发给别人的加好友请求。仅在拉取时有效"
                        }
                    }
                },
                desc:""
            }
        }
    },
    acceptFriendApplication:{
        param:{
            userID:{
                type:"string",
                required:true,
            },
            responseType:{
                type:"number",
                required:true,
                option:{
                    0:"agree",
                    1:"agree and add"
                }
            },
        },
        response:{
            data:{
                type:V2TIMFriendOperationResult,
                desc:""
            }
        }
    },
    refuseFriendApplication:{
        param:{
            userID:{
                type:"string",
                required:true,
            },
        },
        response:{
            data:{
                type:V2TIMFriendOperationResult,
                desc:""
            }
        }
    },
    deleteFriendApplication:{
        param:{
            userID:{
                type:"string",
                required:true,
            },
        },
        response:{
            data:{
                type:"string",
                desc:""
            }
        }
    },
    setFriendApplicationRead:{
        param:{},
        response:{
            data:{
                type:"string",
                desc:""
            }
        }
    },
    addToBlackList:{
        param:{
            userIDList:{
                type:"Array",
                arrayType:"string",
                required:true,
            },
        },
        response:{
            data:{
                type:"Array",
                arrayType:V2TIMFriendOperationResult,
                desc:""
            }
        }
    },
    deleteFromBlackList:{
        param:{
            userIDList:{
                type:"Array",
                arrayType:"string",
                required:true,
            },
        },
        response:{
            data:{
                type:"Array",
                arrayType:V2TIMFriendOperationResult,
                desc:""
            }
        }
    },
    getBlackList:{
        param:{},
        response:{
            data:{
                type:"Array",
                arrayType:V2TIMFriendInfo,
                desc:""
            }
        }
    },
    createFriendGroup:{
        param:{
            userIDList:{
                type:"Array",
                arrayType:"string",
                required:true,
            },
            groupName:{
                type:"string",
                required:true
            }
        },
        response:{
            data:{
                type:"Array",
                arrayType:V2TIMFriendOperationResult,
                desc:""
            }
        }
    },
    getFriendGroups:{
        param:{
            groupNameList:{
                type:"Array",
                arrayType:"string",
                required:true,
            },
        },
        response:{
            data:{
                type:"Array",
                arrayType:V2TIMFriendGroup,
                desc:""
            }
        }
    },
    deleteFriendGroup:{
        param:{
            groupNameList:{
                type:"Array",
                arrayType:"string",
                required:true,
            },
        },
        response:{
            data:{
                type:"string",
                desc:""
            }
        }
    },
    renameFriendGroup:{
        param:{
            oldName:{
                type:"string",
                required:true
            },
            newName:{
                type:"string",
                required:true
            }
        },
        response:{
            data:{
                type:"string",
                desc:""
            }
        }
    },
    addFriendsToFriendGroup:{
        param:{
            groupName:{
                type:"string",
                required:true
            },
            userIDList:{
                type:"Array",
                arrayType:"string",
                required:true,
            },
        },
        response:{
            data:{
                type:"Array",
                arrayType:V2TIMFriendOperationResult,
                desc:""
            }
        }
    },
    deleteFriendsFromFriendGroup:{
        param:{
            groupName:{
                type:"string",
                required:true
            },
            userIDList:{
                type:"Array",
                arrayType:"string",
                required:true,
            },
        },
        response:{
            data:{
                type:"Array",
                arrayType:V2TIMFriendOperationResult,
                desc:""
            }
        }
    },
    // offlinepush manager
    setOfflinePushConfig:{
        param:{
            businessID:{
                type:"number",
                required:true
            },
            token:{
                type:"string",
                required:true,
            },
        },
        response:{
            data:{
                type:"string",
                desc:""
            }
        }
    },
    doBackground:{
        param:{
            unreadCount:{
                type:"number",
                required:true
            },
        },
        response:{
            data:{
                type:"string",
                desc:""
            }
        }
    },
    doForeground:{
        param:{
            unreadCount:{
                type:"number",
                required:true
            },
        },
        response:{
            data:{
                type:"string",
                desc:""
            }
        }
    },
};

const listeners = {
    addGroupListener:{
        param:{},
        response:{
            onMemberEnter:{
                method:"groupListener",
                type:"onMemberEnter",
                data:{
                    type:"object",
                    component:{
                        memberList: {
                            type:"Array",
                            arrayType:V2TIMGroupMemberInfo,
                            desc:"",
                        },
                        groupID:{
                            type:"string",
                            desc:""
                        }
                    }
                },
                listenerUuid:{
                    type:"string",
                }
            },
            onMemberLeave:{
                method:"groupListener",
                type:"onMemberLeave",
                data:{
                    type:"object",
                    component:{
                        member: {
                            type:V2TIMGroupMemberInfo,
                            desc:"",
                        },
                        groupID:{
                            type:"string",
                            desc:""
                        }
                    }
                },
                listenerUuid:{
                    type:"string",
                }
            },
            onMemberInvited:{
                method:"groupListener",
                type:"onMemberInvited",
                data:{
                    type:"object",
                    component:{
                        opUser: {
                            type:V2TIMGroupMemberInfo,
                            desc:"处理人",
                        },
                        memberList: {
                            type:"Array",
                            arrayType:V2TIMGroupMemberInfo,
                            desc:"被拉进群成员",
                        },
                        groupID:{
                            type:"string",
                            desc:""
                        }
                    }
                },
                listenerUuid:{
                    type:"string",
                }
            },
            onMemberKicked:{
                method:"groupListener",
                type:"onMemberKicked",
                data:{
                    type:"object",
                    component:{
                        opUser: {
                            type:V2TIMGroupMemberInfo,
                            desc:"处理人",
                        },
                        memberList: {
                            type:"Array",
                            arrayType:V2TIMGroupMemberInfo,
                            desc:"被踢成员",
                        },
                        groupID:{
                            type:"string",
                            desc:""
                        }
                    }
                },
                listenerUuid:{
                    type:"string",
                }
            },
            onMemberInfoChanged:{
                method:"groupListener",
                type:"onMemberInfoChanged",
                data:{
                    type:"object",
                    component:{
                        groupMemberChangeInfoList: {
                            type:V2TIMGroupMemberChangeInfo,
                            desc:"",
                        },
                        groupID:{
                            type:"string",
                            desc:""
                        }
                    }
                },
                listenerUuid:{
                    type:"string",
                }
            },
            onGroupCreated:{
                method:"groupListener",
                type:"onGroupCreated",
                data:{
                    type:"object",
                    component:{
                        groupID:{
                            type:"string",
                            desc:""
                        }
                    }
                },
                listenerUuid:{
                    type:"string",
                }
            },
            onGroupDismissed:{
                method:"groupListener",
                type:"onGroupDismissed",
                data:{
                    type:"object",
                    component:{
                        opUser: {
                            type:V2TIMGroupMemberInfo,
                            desc:"处理人",
                        },
                        groupID:{
                            type:"string",
                            desc:""
                        }
                    }
                },
                listenerUuid:{
                    type:"string",
                }
            },
            onGroupRecycled:{
                method:"groupListener",
                type:"onGroupRecycled",
                data:{
                    type:"object",
                    component:{
                        opUser: {
                            type:V2TIMGroupMemberInfo,
                            desc:"处理人",
                        },
                        groupID:{
                            type:"string",
                            desc:""
                        }
                    }
                },
                listenerUuid:{
                    type:"string",
                }
            },
            onGroupInfoChanged:{
                method:"groupListener",
                type:"onGroupInfoChanged",
                data:{
                    type:"object",
                    component:{
                        groupChangeInfoList: {
                            type:V2TIMGroupChangeInfo,
                            desc:"修改的群信息",
                        },
                        groupID:{
                            type:"string",
                            desc:""
                        }
                    }
                },
                listenerUuid:{
                    type:"string",
                }
            },
            onReceiveJoinApplication:{
                method:"groupListener",
                type:"onReceiveJoinApplication",
                data:{
                    type:"object",
                    component:{
                        opUser: {
                            member:V2TIMGroupMemberInfo,
                            desc:"申请人",
                        },
                        opReason:{
                            type:"string",
                            desc:"申请原因"
                        },
                        groupID:{
                            type:"string",
                            desc:""
                        }
                    }
                },
                listenerUuid:{
                    type:"string",
                }
            },
            onApplicationProcessed:{
                method:"groupListener",
                type:"onApplicationProcessed",
                data:{
                    type:"object",
                    component:{
                        opUser: {
                            member:V2TIMGroupMemberInfo,
                            desc:"处理人",
                        },
                        opReason:{
                            type:"string",
                            desc:"申请原因"
                        },
                        isAgreeJoin:{
                            type:"boolean",
                            desc:""
                        },
                        groupID:{
                            type:"string",
                            desc:""
                        }
                    }
                },
                listenerUuid:{
                    type:"string",
                }
            },
            onGrantAdministrator:{
                method:"groupListener",
                type:"onGrantAdministrator",
                data:{
                    type:"object",
                    component:{
                        opUser: {
                            member:V2TIMGroupMemberInfo,
                            desc:"处理人",
                        },
                        memberList:{
                            type:"Array",
                            arrayType:V2TIMGroupMemberInfo,
                            desc:""
                        },
                        groupID:{
                            type:"string",
                            desc:""
                        }
                    }
                },
                listenerUuid:{
                    type:"string",
                }
            },
            onRevokeAdministrator:{
                method:"groupListener",
                type:"onRevokeAdministrator",
                data:{
                    type:"object",
                    component:{
                        opUser: {
                            member:V2TIMGroupMemberInfo,
                            desc:"处理人",
                        },
                        memberList:{
                            type:"Array",
                            arrayType:V2TIMGroupMemberInfo,
                            desc:""
                        },
                        groupID:{
                            type:"string",
                            desc:""
                        }
                    }
                },
                listenerUuid:{
                    type:"string",
                }
            },
            onQuitFromGroup:{
                method:"groupListener",
                type:"onQuitFromGroup",
                data:{
                    type:"object",
                    component:{
                        groupID:{
                            type:"string",
                            desc:""
                        }
                    }
                },
                listenerUuid:{
                    type:"string",
                }
            },
            onReceiveRESTCustomData:{
                method:"groupListener",
                type:"onReceiveRESTCustomData",
                data:{
                    type:"object",
                    component:{
                        groupID:{
                            type:"string",
                            desc:""
                        },
                        customData:{
                            type:"string",
                            desc:""
                        }
                    }
                },
                listenerUuid:{
                    type:"string",
                }
            },
            onGroupAttributeChanged:{
                method:"groupListener",
                type:"onGroupAttributeChanged",
                data:{
                    type:"object",
                    component:{
                        groupID:{
                            type:"string",
                            desc:""
                        },
                        groupAttributeMap:{
                            type:"object",
                            desc:"群的所有属性"
                        }
                    }
                },
                listenerUuid:{
                    type:"string",
                }
            },
            onTopicCreated:{
                method:"groupListener",
                type:"onTopicCreated",
                data:{
                    type:"object",
                    component:{
                        groupID:{
                            type:"string",
                            desc:""
                        },
                        topicID:{
                            type:"string",
                            desc:""
                        }
                    }
                },
                listenerUuid:{
                    type:"string",
                }
            },
            onTopicDeleted:{
                method:"groupListener",
                type:"onTopicDeleted",
                data:{
                    type:"object",
                    component:{
                        groupID:{
                            type:"string",
                            desc:""
                        },
                        topicIDList:{
                            type:"Array",
                            arrayType:"string",
                            desc:""
                        }
                    }
                },
                listenerUuid:{
                    type:"string",
                }
            },
            onTopicInfoChanged:{
                method:"groupListener",
                type:"onTopicInfoChanged",
                data:{
                    type:"object",
                    component:{
                        groupID:{
                            type:"string",
                            desc:""
                        },
                        topicInfo:{
                            type:V2TIMTopicInfo,
                            desc:"话题信息"
                        }
                    }
                },
                listenerUuid:{
                    type:"string",
                }
            },
        }
    },
    addAdvancedMsgListener:{
        param:{},
        response:{
            onRecvNewMessage:{
                method:"advancedMsgListener",
                type:"onRecvNewMessage",
                data:{
                    type:V2TIMMessage,
                },
                listenerUuid:{
                    type:"string",
                }
            },
            onRecvMessageReadReceipts:{
                method:"advancedMsgListener",
                type:"onRecvMessageReadReceipts",
                data:{
                    type:"Array",
                    arrayType:V2TIMMessageReceipt
                },
                listenerUuid:{
                    type:"string",
                }
            },
            onRecvC2CReadReceipt:{
                method:"advancedMsgListener",
                type:"onRecvC2CReadReceipt",
                data:{
                    type:"Array",
                    arrayType:V2TIMMessageReceipt
                },
                listenerUuid:{
                    type:"string",
                }
            },
            onRecvMessageRevoked:{
                method:"advancedMsgListener",
                type:"onRecvMessageRevoked",
                data:{
                    type:"string",
                },
                listenerUuid:{
                    type:"string",
                }
            },
            onRecvMessageModified:{
                method:"advancedMsgListener",
                type:"onRecvMessageModified",
                data:{
                    type:V2TIMMessage,
                },
                listenerUuid:{
                    type:"string",
                }
            },
            onRecvMessageExtensionsChanged:{
                method:"advancedMsgListener",
                type:"onRecvMessageExtensionsChanged",
                data:{
                    type:"object",
                    component:{
                        msgID:{
                            type:"string"
                        },
                        extensions:{
                            type:"object",
                            component:{
                                extensionKey:{
                                    type:"string"
                                },
                                extensionValue:{
                                    type:"string"
                                }
                            }
                        }
                    }
                },
                listenerUuid:{
                    type:"string",
                }
            },
            onRecvMessageExtensionsDeleted:{
                method:"advancedMsgListener",
                type:"onRecvMessageExtensionsDeleted",
                data:{
                    type:"object",
                    component:{
                        msgID:{
                            type:"string"
                        },
                        extensionKeys:{
                            type:"Array",
                            arrayType:"string"
                        }
                    }
                },
                listenerUuid:{
                    type:"string",
                }
            },
            onDownloadMessageProgress:{
                method:"advancedMsgListener",
                type:"onDownloadMessageProgress",
                data:{
                    type:"object",
                    component:{
                        isFinished:{
                            type:"boolean"
                        },
                        isError:{
                            type:"boolean"
                        },
                        currentSize:{
                            type:"number"
                        },
                        totalSize:{
                            type:"number"
                        },
                        msgID:{
                            type:"string"
                        },
                        type:{
                            type:"number"
                        },
                        isSnapshot:{
                            type:"boolean"
                        },
                        path:{
                            type:"string"
                        },
                        errorCode:{
                            type:"number"
                        },
                        errorDesc:{
                            type:"string"
                        }
                    }
                }
            },
            onSendMessageProgress:{
                method:"onSendMessageProgress",
                type:"onSendMessageProgress",
                data:{
                    type:"object",
                    component:{
                        msg:{
                            type:V2TIMMessage
                        },
                        progress:{
                            type:"number"
                        }
                    }
                }
            }
        }
    },
    addSignalingListener:{
        param:{},
        response:{
            onReceiveNewInvitation:{
                method:"signalingListener",
                type:"onReceiveNewInvitation",
                data:{
                    type:"object",
                    component:{
                        inviteID:{
                            type:"string"
                        },
                        data:{
                            type:"string"
                        },
                        groupID:{
                            type:"string"
                        },
                        inviter:{
                            type:"string"
                        },
                        inviteeList:{
                            type:"Array",
                            arrayType:"string"
                        },
                    }
                },
                listenerUuid:{
                    type:"string",
                }
            },
            onInviteeAccepted:{
                method:"signalingListener",
                type:"onInviteeAccepted",
                data:{
                    type:"object",
                    component:{
                        inviteID:{
                            type:"string"
                        },
                        data:{
                            type:"string"
                        },
                        invitee:{
                            type:"string"
                        },
                    }
                },
                listenerUuid:{
                    type:"string",
                }
            },
            onInviteeRejected:{
                method:"signalingListener",
                type:"onInviteeRejected",
                data:{
                    type:"object",
                    component:{
                        inviteID:{
                            type:"string"
                        },
                        data:{
                            type:"string"
                        },
                        invitee:{
                            type:"string"
                        },
                    }
                },
                listenerUuid:{
                    type:"string",
                }
            },
            onInvitationCancelled:{
                method:"signalingListener",
                type:"onInvitationCancelled",
                data:{
                    type:"object",
                    component:{
                        inviteID:{
                            type:"string"
                        },
                        data:{
                            type:"string"
                        },
                        inviter:{
                            type:"string"
                        },
                    }
                },
                listenerUuid:{
                    type:"string",
                }
            },
            onInvitationTimeout:{
                method:"signalingListener",
                type:"onInvitationTimeout",
                data:{
                    type:"object",
                    component:{
                        inviteID:{
                            type:"string"
                        },
                        inviteeList:{
                            type:"Array",
                            arrayType:"string"
                        },
                    }
                },
                listenerUuid:{
                    type:"string",
                }
            },
            onInvitationModified:{
                method:"signalingListener",
                type:"onInvitationModified",
                data:{
                    type:"object",
                    component:{
                        inviteID:{
                            type:"string"
                        },
                        data:{
                            type:"string"
                        },
                    }
                },
                listenerUuid:{
                    type:"string",
                }
            },
        }
    },
    addConversationListener:{
        param:{},
        response:{
            onSyncServerStart:{
                method:"conversationListener",
                type:"onSyncServerStart",
                data:{
                    type:"string",
                },
                listenerUuid:{
                    type:"string",
                }
            },
            onSyncServerFinish:{
                method:"conversationListener",
                type:"onSyncServerFinish",
                data:{
                    type:"string",
                },
                listenerUuid:{
                    type:"string",
                }
            },
            onSyncServerFailed:{
                method:"conversationListener",
                type:"onSyncServerFailed",
                data:{
                    type:"string",
                },
                listenerUuid:{
                    type:"string",
                }
            },
            onNewConversation:{
                method:"conversationListener",
                type:"onNewConversation",
                data:{
                    type:"Array",
                    arrayType:V2TIMConversation
                },
                listenerUuid:{
                    type:"string",
                }
            },
            onConversationChanged:{
                method:"conversationListener",
                type:"onConversationChanged",
                data:{
                    type:"Array",
                    arrayType:V2TIMConversation
                },
                listenerUuid:{
                    type:"string",
                }
            },
            onTotalUnreadMessageCountChanged:{
                method:"conversationListener",
                type:"onTotalUnreadMessageCountChanged",
                data:{
                    type:"number",
                },
                listenerUuid:{
                    type:"string",
                }
            },
            onConversationGroupCreated:{
                method:"conversationListener",
                type:"onConversationGroupCreated",
                data:{
                    type:"object",
                    component:{
                        groupName:{
                            type:"string"
                        },
                        conversaionList:{
                            type:"Array",
                            arrayType:V2TIMConversation
                        }
                    }
                },
                listenerUuid:{
                    type:"string",
                }
            },
            onConversationGroupDeleted:{
                method:"conversationListener",
                type:"onConversationGroupDeleted",
                data:{
                    type:"string",
                    desc:"group name"
                },
                listenerUuid:{
                    type:"string",
                }
            },
            onConversationGroupNameChanged:{
                method:"conversationListener",
                type:"onConversationGroupNameChanged",
                data:{
                    type:"object",
                    component:{
                        oldName:{
                            type:"string"
                        },
                        newName:{
                            type:"string"
                        }
                    }
                },
                listenerUuid:{
                    type:"string",
                }
            },
            onConversationsAddedToGroup:{
                method:"conversationListener",
                type:"onConversationsAddedToGroup",
                data:{
                    type:"object",
                    component:{
                        groupName:{
                            type:"string"
                        },
                        conversationList:{
                            type:"Array",
                            arrayType:V2TIMConversation
                        }
                    }
                },
                listenerUuid:{
                    type:"string",
                }
            },
            onConversationsDeletedFromGroup:{
                method:"conversationListener",
                type:"onConversationsDeletedFromGroup",
                data:{
                    type:"object",
                    component:{
                        groupName:{
                            type:"string"
                        },
                        conversationList:{
                            type:"Array",
                            arrayType:V2TIMConversation
                        }
                    }
                },
                listenerUuid:{
                    type:"string",
                }
            },
        }
    },
    addFriendListener:{
        param:{},
        response:{
            onFriendApplicationListAdded:{
                method:"friendListener",
                type:"onFriendApplicationListAdded",
                data:{
                    type:"number",
                    option:{
                        1:"别人发给我的加好友请求",
                        2:"我发给别人的加好友请求",
                        3:"别人发给我的和我发给别人的加好友请求。仅在拉取时有效"
                    }
                },
                listenerUuid:{
                    type:"string",
                }
            },
            onFriendApplicationListDeleted:{
                method:"friendListener",
                type:"onFriendApplicationListAdded",
                data:{
                    type:"Array",
                    arrayType:"string"
                },
                listenerUuid:{
                    type:"string",
                }
            },
            onFriendApplicationListRead:{
                method:"friendListener",
                type:"onFriendApplicationListRead",
                data:{
                    type:"string",
                },
                listenerUuid:{
                    type:"string",
                }
            },
            onFriendListAdded:{
                method:"friendListener",
                type:"onFriendListAdded",
                data:{
                    type:"Array",
                    arrayType:V2TIMFriendInfo,
                },
                listenerUuid:{
                    type:"string",
                }
            },
            onFriendListDeleted:{
                method:"friendListener",
                type:"onFriendListDeleted",
                data:{
                    type:"Array",
                    arrayType:"string"
                },
                listenerUuid:{
                    type:"string",
                }
            },
            onBlackListAdd:{
                method:"friendListener",
                type:"onBlackListAdd",
                data:{
                    type:"Array",
                    arrayType:V2TIMFriendInfo,
                },
                listenerUuid:{
                    type:"string",
                }
            },
            onBlackListDeleted:{
                method:"friendListener",
                type:"onBlackListDeleted",
                data:{
                    type:"Array",
                    arrayType:"string"
                },
                listenerUuid:{
                    type:"string",
                }
            },
            onFriendInfoChanged:{
                method:"friendListener",
                type:"onFriendInfoChanged",
                data:{
                    type:"Array",
                    arrayType:V2TIMFriendInfo,
                },
                listenerUuid:{
                    type:"string",
                }
            },
        }
    }
};

function isArray(something){
    return Object.prototype.toString.call(something) === '[object Array]';
}

function compareParam(name,param){
    const compare = params[name].param;
    const flag = {
        param:compare,
        required: []
    };
    
    Object.keys(compare).forEach((key)=>{
        if(compare[key].required == true){
            flag.required.push(key);
        }
        // 是否存在
        if(key in param){
            // 类型匹配
            // Object
            if(typeof param[key] == "object"){
                // Array
                if(isArray(param[key]) && compare[key].type == "Array"){
                    if(param[key].length == 0){
                        flag.error = key + " array length is 0";
                    }else if(param[key][0] == ""){
                        flag.error = key + " array element is required"
                    }
                    else if(compare[key].arrayType != "object" && typeof compare[key].arrayType != "object" && typeof param[key][0] != compare[key].arrayType){
                        flag.error = key + " is not array of type "+ compare[key].arrayType;
                    }
                }else if(typeof compare[key].type == "object"){
                    // 其他类
                } else if(compare[key].type == "object"){
                    // object
                }
            }  
            // string & number
            else if(typeof param[key] != compare[key].type){
                console.log(key + " is not type of " + compare[key].type);
                flag.error = key + " is not type of " + compare[key].type;
            }
        }else if(compare[key].required == true){
            console.log(key + " is required");
            flag.error = key + " is required";
        }else if(compare[key].required == false){
            // 加入到param
            param[key] = compare[key].default;
        }
    });
    if("error" in flag){
        return flag;
    }
    return param;
}

function addResponseType(name){
    const response = {}
    const type = params[name].response.data;
    response.type = type;
    if(type.type == "Array"){
        response.subtype = type.arrayType;
    }
    return response;
}

function randomString(e) {    
    e = e || 32;
    let t = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678",
    a = t.length,
    n = "";
    for (i = 0; i < e; i++) n += t.charAt(Math.floor(Math.random() * a));
    return n;
}

class sdkListener{
    count = "";
    constructor({onConnecting = null,onConnectSuccess = null,onConnectFailed = null,onKickedOffline = null,onUserSigExpired = null,onSelfInfoUpdated = null,onUserStatusChanged = null}){
        this.count = randomString(6);
        this.onConnecting = onConnecting;
        this.onConnectSuccess = onConnectSuccess;
        this.onConnectFailed = onConnectFailed;
        this.onKickedOffline = onKickedOffline;
        this.onUserSigExpired = onUserSigExpired;
        this.onSelfInfoUpdated = onSelfInfoUpdated;
        this.onUserStatusChanged = onUserStatusChanged;
    }
};

class advancedMsgListener{
    count = "";
    constructor({
        onRecvNewMessage = null,onRecvMessageReadReceipts = null,onRecvC2CReadReceipt = null,onRecvMessageRevoked = null,
        onRecvMessageModified = null,onRecvMessageExtensionsChanged = null,onRecvMessageExtensionsDeleted = null,
        onDownloadMessageProgress = null,onSendMessageProgress = null
        
    }){
        this.count = randomString(6)
        this.onRecvNewMessage = onRecvNewMessage;
        this.onRecvMessageReadReceipts = onRecvMessageReadReceipts;
        this.onRecvC2CReadReceipt = onRecvC2CReadReceipt;
        this.onRecvMessageRevoked = onRecvMessageRevoked;
        this.onRecvMessageModified = onRecvMessageModified;
        this.onRecvMessageExtensionsChanged = onRecvMessageExtensionsChanged;
        this.onRecvMessageExtensionsDeleted = onRecvMessageExtensionsDeleted;
        this.onDownloadMessageProgress = onDownloadMessageProgress;
        this.onSendMessageProgress = onSendMessageProgress;
    }
};

function sortListenerType(data,listener){
    let type = data["type"]
    switch(type){
        case "onConnecting":{
            if(listener.onConnecting != null)
                listener.onConnecting(data);
            break;
        }
        case "onConnectSuccess":{
            if(listener.onConnectSuccess != null)
                listener.onConnectSuccess(data);               
            break;
        }
        case "onConnectFailed":{
            if(listener.onConnectFailed != null)
                listener.onConnectFailed(data);                
            break;
        }
        case "onKickedOffline":{
            if(listener.onKickedOffline != null)
                listener.onKickedOffline(data);               
            break;
        }
        case "onUserSigExpired":{
            if(listener.onUserSigExpired != null)
                listener.onUserSigExpired(data);
            break;
        }
        case "onSelfInfoUpdated":{
            if(listener.onSelfInfoUpdated != null)
                listener.onSelfInfoUpdated(data);
            break;
        }
        case "onUserStatusChanged":{
            if(listener.onUserStatusChanged != null)
                listener.onUserStatusChanged(data);
            break;
        }
        case "onRecvNewMessage":{
            if(listener.onRecvNewMessage != null)
                listener.onRecvNewMessage(data);
            break;
        }
        case "onRecvMessageReadReceipts":{
            if(listener.onRecvMessageReadReceipts != null)
                listener.onRecvMessageReadReceipts(data);
            break;
        }
        case "onRecvC2CReadReceipt":{
            if(listener.onRecvC2CReadReceipt != null)
                listener.onRecvC2CReadReceipt(data);
            break;
        }
        case "onRecvMessageRevoked":{
            if(listener.onRecvMessageRevoked != null)
                listener.onRecvMessageRevoked(data);
            break;
        }
        case "onRecvMessageModified":{
            if(listener.onRecvMessageModified != null)
                listener.onRecvMessageModified(data);
            break;
        }
        case "onRecvMessageExtensionsChanged":{
            if(listener.onRecvMessageExtensionsChanged != null)
                listener.onRecvMessageExtensionsChanged(data);
            break;
        }
        case "onRecvMessageExtensionsDeleted":{
            if(listener.onRecvMessageExtensionsDeleted != null)
                listener.onRecvMessageExtensionsDeleted(data);
            break;
        }
        case "onSendMessageProgress":{
            if(listener.onSendMessageProgress != null){
                listener.onSendMessageProgress(data);
            }
            break;
        }
        case "onDownloadMessageProgress":{
            if(listener.onDownloadMessageProgress != null){
                listener.onDownloadMessageProgress(data);
            }
            break;
        }
        case "onConnecting":{
            if(listener.onConnecting != null)
                listener.onConnecting(data);
            break;
        }
        case "onConnectSuccess":{
            if(listener.onConnectSuccess != null)
                listener.onConnectSuccess(data)
            break;
        }
        case "onConnectFailed":{
            if(listener.onConnectFailed != null)
                listener.onConnectFailed(data);
            break;
        }
        case "onKickedOffline":{
            if(listener.onKickedOffline != null)
                listener.onKickedOffline(data);
            break;
        }
        case "onUserSigExpired":{
            if(listener.onUserSigExpired != null)
                listener.onUserSigExpired(data);
            break;
        }
        case "onSelfInfoUpdated":{
            if(listener.onSelfInfoUpdated != null)
                listener.onSelfInfoUpdated(data);
            break;
        }
        case "onUserStatusChanged":{
            if(listener.onUserStatusChanged != null)
                listener.onUserStatusChanged(data);
            break;
        }
        case "onReceiveNewInvitation":{
            if(listener.onReceiveNewInvitation != null)
                listener.onReceiveNewInvitation(data);
            break;
        }
        case "onInviteeAccepted":{
            if(listener.onInviteeAccepted != null)
                listener.onInviteeAccepted(data);
            break;
        }
        case "onInviteeRejected":{
            if(listener.onInviteeRejected != null)
                listener.onInviteeRejected(data);
            break;
        }
        case "onInvitationCancelled":{
            if(listener.onInvitationCancelled != null)
                listener.onInvitationCancelled(data);
            break;
        }
        case "onInvitationTimeout":{
            if(listener.onInvitationTimeout != null)
                listener.onInvitationTimeout(data);
            break;
        }
        case "onInvitationModified":{
            if(listener.onInvitationModified != null)
                listener.onInvitationModified(data);
            break;
        }
        case "onMemberEnter":{
            if(listener.onMemberEnter != null)
                listener.onMemberEnter(data);
            break;
        }
        case "onMemberLeave":{
            if(listener.onMemberLeave != null)
                listener.onMemberLeave(data);
            break;
        }
        case "onMemberInvited":{
            if(listener.onMemberInvited != null)
                listener.onMemberInvited(data);
            break;
        }
        case "onMemberKicked":{
            if(listener.onMemberKicked != null)
                listener.onMemberKicked(data);
            break;
        }
        case "onMemberInfoChanged":{
            if(listener.onMemberInfoChanged != null)
                listener.onMemberInfoChanged(data);
            break;
        }
        case "onGroupCreated":{
            if(listener.onGroupCreated != null)
                listener.onGroupCreated(data);
            break;
        }
        case "onGroupDismissed":{
            if(listener.onGroupDismissed != null)
                listener.onGroupDismissed(data);
            break;
        }
        case "onGroupRecycled":{
            if(listener.onGroupRecycled != null)
                listener.onGroupRecycled(data);
            break;
        }
        case "onGroupInfoChanged":{
            if(listener.onGroupInfoChanged != null)
                listener.onGroupInfoChanged(data);
            break;
        }
        case "onReceiveJoinApplication":{
            if(listener.onReceiveJoinApplication != null)
                listener.onReceiveJoinApplication(data);
            break;
        }
        case "onApplicationProcessed":{
            if(listener.onApplicationProcessed != null)
                listener.onApplicationProcessed(data);
            break;
        }
        case "onGrantAdministrator":{
            if(listener.onGrantAdministrator != null)
                listener.onGrantAdministrator(data);
            break;
        }
        case "onRevokeAdministrator":{
            if(listener.onRevokeAdministrator != null)
                listener.onRevokeAdministrator(data);
            break;
        }
        case "onQuitFromGroup":{
            if(listener.onQuitFromGroup != null)
                listener.onQuitFromGroup(data);
            break;
        }
        case "onReceiveRESTCustomData":{
            if(listener.onReceiveRESTCustomData != null)
                listener.onReceiveRESTCustomData(data);
            break;
        }
        case "onGroupAttributeChanged":{
            if(listener.onGroupAttributeChanged != null)
                listener.onGroupAttributeChanged(data);
            break;
        }
        case "onTopicCreated":{
            if(listener.onTopicCreated != null)
                listener.onTopicCreated(data);
            break;
        }
        case "onTopicDeleted":{
            if(listener.onTopicDeleted != null)
                listener.onTopicDeleted(data);
            break;
        }
        case "onTopicInfoChanged":{
            if(listener.onTopicInfoChanged != null)
                listener.onTopicInfoChanged(data);
            break;
        }
        case "onFriendApplicationListAdded":{
            if(listener.onFriendApplicationListAdded != null)
                listener.onFriendApplicationListAdded(data);
            break;
        }
        case "onFriendApplicationListDeleted":{
            if(listener.onFriendApplicationListDeleted != null)
                listener.onFriendApplicationListDeleted(data);
            break;
        }
        case "onFriendApplicationListRead":{
            if(listener.onFriendApplicationListRead != null)
                listener.onFriendApplicationListRead(data);
            break;
        }
        case "onFriendListAdded":{
            if(listener.onFriendListAdded != null)
                listener.onFriendListAdded(data);
            break;
        }
        case "onFriendListDeleted":{
            if(listener.onFriendListDeleted != null)
                listener.onFriendListDeleted(data);
            break;
        }
        case "onBlackListAdd":{
            if(listener.onBlackListAdd != null)
                listener.onBlackListAdd(data);
            break;
        }
        case "onBlackListDeleted":{
            if(listener.onBlackListDeleted != null)
                listener.onBlackListDeleted(data);
            break;
        }
        case "onFriendInfoChanged":{
            if(listener.onFriendInfoChanged != null)
                listener.onFriendInfoChanged(data);
            break;
        }
        case "onSyncServerStart":{
            if(listener.onSyncServerStart != null)
                listener.onSyncServerStart(data);
            break;
        }
        case "onSyncServerFinish":{
            if(listener.onSyncServerFinish != null)
                listener.onSyncServerFinish(data);
            break;
        }
        case "onSyncServerFailed":{
            if(listener.onSyncServerFailed != null)
                listener.onSyncServerFailed(data);
            break;
        }
        case "onNewConversation":{
            if(listener.onNewConversation != null)
                listener.onNewConversation(data);
            break;
        }
        case "onConversationChanged":{
            if(listener.onConversationChanged != null)
                listener.onConversationChanged(data);
            break;
        }
        case "onTotalUnreadMessageCountChanged":{
            if(listener.onTotalUnreadMessageCountChanged != null)
                listener.onTotalUnreadMessageCountChanged(data);
            break;
        }
        case "onConversationGroupCreated":{
            if(listener.onConversationGroupCreated != null)
                listener.onConversationGroupCreated(data);
            break;
        }
        case "onConversationGroupDeleted":{
            if(listener.onConversationGroupDeleted != null)
                listener.onConversationGroupDeleted(data);
            break;
        }
        case "onConversationGroupNameChanged":{
            if(listener.onConversationGroupNameChanged != null)
                listener.onConversationGroupNameChanged(data);
            break;
        }
        case "onConversationsAddedToGroup":{
            if(listener.onConversationsAddedToGroup != null)
                listener.onConversationsAddedToGroup(data);
            break;
        }
        case "onConversationsDeletedFromGroup":{
            if(listener.onConversationsDeletedFromGroup != null)
                listener.onConversationsDeletedFromGroup(data);
            break;
        }
    }
}

class signalingListener{
    count ="";
    constructor({onReceiveNewInvitation = null,onInviteeAccepted = null,onInviteeRejected = null,onInvitationCancelled = null,onInvitationTimeout = null,onInvitationModified = null}){
        this.count=randomString(6);
        this.onReceiveNewInvitation = onReceiveNewInvitation;
        this.onInviteeAccepted = onInviteeAccepted;
        this.onInviteeRejected = onInviteeRejected;
        this.onInvitationCancelled = onInvitationCancelled;
        this.onInvitationTimeout = onInvitationTimeout;
        this.onInvitationModified = onInvitationModified;
    }
};

class groupListener{
    constructor({onMemberEnter = null,onMemberLeave = null,onMemberInvited = null,onMemberKicked = null,onMemberInfoChanged = null,onGroupCreated = null,onGroupDismissed = null,onGroupRecycled = null,onGroupInfoChanged = null,onReceiveJoinApplication = null,onApplicationProcessed = null,onGrantAdministrator = null,onRevokeAdministrator = null,onQuitFromGroup = null,onReceiveRESTCustomData = null,onGroupAttributeChanged = null,onTopicCreated = null,onTopicDeleted = null,onTopicInfoChanged = null}){
        this.count = randomString(6);
        this.onMemberEnter = onMemberEnter;
        this.onMemberLeave = onMemberLeave;
        this.onMemberInvited = onMemberInvited;
        this.onMemberKicked = onMemberKicked;
        this.onMemberInfoChanged = onMemberInfoChanged;
        this.onGroupCreated = onGroupCreated;
        this.onGroupDismissed = onGroupDismissed;
        this.onGroupRecycled = onGroupRecycled;
        this.onGroupInfoChanged = onGroupInfoChanged;
        this.onReceiveJoinApplication = onReceiveJoinApplication;
        this.onApplicationProcessed = onApplicationProcessed;
        this.onGrantAdministrator = onGrantAdministrator;
        this.onRevokeAdministrator = onRevokeAdministrator;
        this.onQuitFromGroup = onQuitFromGroup;
        this.onReceiveRESTCustomData = onReceiveRESTCustomData;
        this.onGroupAttributeChanged = onGroupAttributeChanged;
        this.onTopicCreated = onTopicCreated;
        this.onTopicDeleted = onTopicDeleted;
        this.onTopicInfoChanged = onTopicInfoChanged;
    }
};

class friendshipListener{
    constructor({onFriendApplicationListAdded = null,onFriendApplicationListDeleted = null,onFriendApplicationListRead = null,onFriendListAdded = null,onFriendListDeleted = null,onBlackListAdd = null,onBlackListDeleted = null,onFriendInfoChanged = null}){
        this.count=randomString(6);
        this.onFriendApplicationListAdded = onFriendApplicationListAdded;
        this.onFriendApplicationListDeleted = onFriendApplicationListDeleted;
        this.onFriendApplicationListRead = onFriendApplicationListRead;
        this.onFriendListAdded = onFriendListAdded;
        this.onFriendListDeleted = onFriendListDeleted;
        this.onBlackListAdd = onBlackListAdd;
        this.onBlackListDeleted = onBlackListDeleted;
        this.onFriendInfoChanged = onFriendInfoChanged;
    }
};

class conversationListener{
    constructor({onSyncServerStart = null,onSyncServerFinish = null,onSyncServerFailed = null,onNewConversation = null,onConversationChanged = null,onTotalUnreadMessageCountChanged = null,onConversationGroupCreated = null,onConversationGroupDeleted = null,onConversationGroupNameChanged = null,onConversationsAddedToGroup = null,onConversationsDeletedFromGroup = null}){
        this.count=randomString(6);
        this.onSyncServerStart = onSyncServerStart;
        this.onSyncServerFinish = onSyncServerFinish;
        this.onSyncServerFailed = onSyncServerFailed;
        this.onNewConversation = onNewConversation;
        this.onConversationChanged = onConversationChanged;
        this.onTotalUnreadMessageCountChanged = onTotalUnreadMessageCountChanged;
        this.onConversationGroupCreated = onConversationGroupCreated;
        this.onConversationGroupDeleted = onConversationGroupDeleted;
        this.onConversationGroupNameChanged = onConversationGroupNameChanged;
        this.onConversationsAddedToGroup = onConversationsAddedToGroup;
        this.onConversationsDeletedFromGroup = onConversationsDeletedFromGroup;
    }
};

function findUuid(map,listener){
    return Object.keys(map).find(key=>map[key] == listener);
}



var tencentCloudChat = {
    tencentCloudChatSDK:null,
    sdkListenerMap:{},
    advancedMsgListenerMap:{},
    groupListenerMap:{},
    friendListenerMap:{},
    conversationListenerMap:{},
    signalingListenerMap:{},
    sdkListenerFunction:function(data){
        let listenerUuid = data["listenerUuid"]
        sortListenerType(data,this.sdkListenerMap[listenerUuid])
    },
    advancedMsgListenerFucntion:function(data){
        let listenerUuid = data["listenerUuid"]
        sortListenerType(data,this.advancedMsgListenerMap[listenerUuid])
    },
    groupListenerFunction:function(data){
        let listenerUuid = data["listenerUuid"]
        sortListenerType(data,this.groupListenerMap[listenerUuid])
    },
    friendshipListenerFunction:function(data){
        let listenerUuid = data["listenerUuid"]
        sortListenerType(data,this.friendListenerMap[listenerUuid])
    },
    conversationListenerFunction:function(data){
        let listenerUuid = data["listenerUuid"]
        sortListenerType(data,this.conversationListenerMap[listenerUuid])
    },
    signalingListenerFunction:function(data){
        let listenerUuid = data["listenerUuid"]
        sortListenerType(data,this.signalingListenerMap[listenerUuid])
    },
    test:function({
        sdkAppID,logLevel,uuid
    }){
        let param = arguments[0];
        let finalParam = compareParam('initSDK',param);
        if("error" in finalParam){
            console.log(finalParam)
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            this.tencentCloudChatSDK.initSDK(finalParam,function(data,err){
                if(err){
                    reject(err)
                }else{
                    
                    
                    resolve(data);
                }
            });
        })
    },
    initTencentCloudChat:function(sdk){
        this.tencentCloudChatSDK = sdk;
    },
    initSDK:function({sdkAppID,logLevel,uuid}){
        // this.tencentCloudChatSDK = tencentCloudChatSDK;
        let param = arguments[0];
        let finalParam = compareParam('initSDK',param);
        if("error" in finalParam){
            console.log(finalParam)
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            this.tencentCloudChatSDK.initSDK(finalParam,function(data,err){
                if(err){
                    reject(err)
                }else{
                    
                    resolve(data);
                }
            });
        })
    },
    addIMSDKListener:function(sdkListener){
        let uuid = sdkListener.count.toString()
        this.sdkListenerMap[uuid] = sdkListener;
        let that = this;
        return new Promise((resolve,reject)=>{
            this.tencentCloudChatSDK.addIMSDKListener({"uuid":uuid},function(data,err){
                if(err){
                    reject(err)
                }else{
                    
                    that.sdkListenerFunction(data);
                    resolve(data);
                }
            });
        })
    },
    removeIMSDKListener:function(sdkListener){
        let uuid = findUuid(this.sdkListenerMap,sdkListener);
        delete this.sdkListenerMap[uuid];
        return new Promise((resolve,reject)=>{
            this.tencentCloudChatSDK.removeIMSDKListener({"uuid":uuid},function(data,err){
                if(err){
                    reject(err)
                }else{
                    resolve(data);
                }
            });
        })

    },
    addAdvancedMsgListener:function(advancedMsgListener){
        let uuid = advancedMsgListener.count
        this.advancedMsgListenerMap[uuid] = advancedMsgListener;
        console.log(uuid)
        let that = this;
        return new Promise((resolve,reject)=>{
            this.tencentCloudChatSDK.addAdvancedMsgListener({"uuid":uuid},function(data,err){
                if(err){
                    reject(err)
                }else{
                    
                    that.advancedMsgListenerFucntion(data);
                    resolve(data);
                }
            });
        })
    },
    removeAdvancedMsgListener:function(advancedMsgListener){
        let uuid = findUuid(this.advancedMsgListenerMap,advancedMsgListener);
        delete this.advancedMsgListenerMap[uuid];
        console.log(uuid)
        return new Promise((resolve,reject)=>{
            this.tencentCloudChatSDK.removeAdvancedMsgListener({"uuid":uuid},function(data,err){
                if(err){
                    reject(err)
                }else{
                    resolve(data);
                }
            });
        })
    },
    addGroupListener:function(groupListener){
        let uuid = groupListener.count.toString()
        console.log(uuid)
        this.groupListenerMap[uuid] = groupListener
        let that = this;
        return new Promise((resolve,reject)=>{
            this.tencentCloudChatSDK.addGroupListener({"uuid":uuid},function(data,err){
                if(err){
                    reject(err)
                }else{
                    
                    that.groupListenerFunction(data);
                }
            });
        })
    },
    removeGroupListener:function(groupListener){
        let uuid = findUuid(this.groupListenerMap,groupListener);
        delete this.groupListenerMap[uuid];
        console.log(uuid)
        let that = this;
        return new Promise((resolve,reject)=>{
            this.tencentCloudChatSDK.removeGroupListener({"uuid":uuid},function(data,err){
                if(err){
                    reject(err)
                }else{
                    resolve(data);
                }
            });
        })
    },
    addFriendListener:function(friendListener){
        let uuid = friendListener.count.toString()
        this.friendListenerMap[uuid] = friendListener;
        let that = this;
        return new Promise((resolve,reject)=>{
            this.tencentCloudChatSDK.addFriendListener({"uuid":uuid},function(data,err){
                if(err){
                    reject(err)
                }else{
                    
                    that.friendshipListenerFunction(data)
                    resolve(data);
                }
            });
        })
    },
    removeFriendListener:function(friendListener){
        let uuid = findUuid(this.friendListenerMap,friendListener);
        delete this.friendListenerMap[uuid];
        console.log(uuid)
        return new Promise((resolve,reject)=>{
            this.tencentCloudChatSDK.removeFriendListener({"uuid":uuid},function(data,err){
                if(err){
                    reject(err)
                }else{
                    resolve(data);
                }
            });
        })
    },
    addConversationListener:function(conversationListener){
        let uuid = conversationListener.count.toString()
        this.conversationListenerMap[uuid] = conversationListener;
        let that = this;
        return new Promise((resolve,reject)=>{
            this.tencentCloudChatSDK.addConversationListener({"uuid":uuid},function(data,err){
                if(err){
                    reject(err)
                }else{
                    
                    that.conversationListenerFunction(data)
                    resolve(data);
                }
            });
        })
    },
    removeConversationListener:function(conversationListener){
        let uuid = findUuid(this.conversationListenerMap,conversationListener);
        delete this.conversationListenerMap[uuid];
        console.log(uuid)
        let that = this;
        return new Promise((resolve,reject)=>{
            this.tencentCloudChatSDK.removeConversationListener({"uuid":uuid},function(data,err){
                if(err){
                    reject(err)
                }else{
                    resolve(data);
                }
            });
        })
    },
    addSignalingListener:function(signalingListener){
        let uuid = signalingListener.count.toString()
        this.signalingListenerMap[uuid] = signalingListener;
        let that = this;
        return new Promise((resolve,reject)=>{
            this.tencentCloudChatSDK.addSignalingListener({"uuid":uuid},function(data,err){
                if(err){
                    reject(err)
                }else{
                    
                    that.signalingListenerFunction(data);
                    resolve(data);
                }
            });
        })
    },
    removeSignalingListener:function(signalingListener){
        let uuid = findUuid(this.signalingListenerMap,signalingListener);
        delete this.signalingListenerMap[uuid];
        console.log(uuid)
        let that = this;
        return new Promise((resolve,reject)=>{
            this.tencentCloudChatSDK.removeSignalingListener({"uuid":uuid},function(data,err){
                if(err){
                    reject(err)
                }else{
                    resolve(data);
                }
            });
        })
    },
    unInitSDK:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('unInitSDK',param);
        console.log(JSON.stringify(finalParam))
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('unInitSDK');
            this.tencentCloudChatSDK.unInitSDK(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    getVersion:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('getVersion',param);
        console.log(JSON.stringify(finalParam))
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('getVersion');
            this.tencentCloudChatSDK.getVersion(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    getServerTime:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('getServerTime',param);
        console.log(JSON.stringify(finalParam))
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('getServerTime');
            this.tencentCloudChatSDK.getServerTime(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    login:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('login',param);
        console.log(JSON.stringify(finalParam))
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('login');
            this.tencentCloudChatSDK.login(finalParam,function(data,err){if(err){console.log(JSON.stringify(err));reject(err);}else{;result.data = data ; resolve(result);}});
        })
    },
    logout:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('logout',param);
        console.log(JSON.stringify(finalParam))
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('logout');
            this.tencentCloudChatSDK.logout(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    getLoginUser:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('getLoginUser',param);
        console.log(JSON.stringify(finalParam))
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('getLoginUser');
            this.tencentCloudChatSDK.getLoginUser(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    getLoginStatus:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('getLoginStatus',param);
        console.log(JSON.stringify(finalParam))
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('getLoginStatus');
            this.tencentCloudChatSDK.getLoginStatus(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    createGroup:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('createGroup',param);
        console.log(JSON.stringify(finalParam))
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('createGroup');
            this.tencentCloudChatSDK.createGroup(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    joinGroup:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('joinGroup',param);
        console.log(JSON.stringify(finalParam))
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('joinGroup');
            this.tencentCloudChatSDK.joinGroup(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    quitGroup:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('quitGroup',param);
        console.log(JSON.stringify(finalParam))
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('quitGroup');
            this.tencentCloudChatSDK.quitGroup(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    dismissGroup:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('dismissGroup',param);
        console.log(JSON.stringify(finalParam))
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('dismissGroup');
            this.tencentCloudChatSDK.dismissGroup(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    getUsersInfo:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('getUsersInfo',param);
        console.log(JSON.stringify(finalParam))
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('getUsersInfo');
            this.tencentCloudChatSDK.getUsersInfo(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    getUserStatus:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('getUserStatus',param);
        console.log(JSON.stringify(finalParam))
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('getUserStatus');
            this.tencentCloudChatSDK.getUserStatus(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    setSelfInfo:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('setSelfInfo',param);
        console.log(JSON.stringify(finalParam))
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('setSelfInfo');
            this.tencentCloudChatSDK.setSelfInfo(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    setSelfStatus:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('setSelfStatus',param);
        console.log(JSON.stringify(finalParam))
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('setSelfStatus');
            this.tencentCloudChatSDK.setSelfStatus(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    subscribeUserStatus:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('subscribeUserStatus',param);
        console.log(JSON.stringify(finalParam))
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('subscribeUserStatus');
            this.tencentCloudChatSDK.subscribeUserStatus(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    unsubscribeUserStatus:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('unsubscribeUserStatus',param);
        console.log(JSON.stringify(finalParam))
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('unsubscribeUserStatus');
            this.tencentCloudChatSDK.unsubscribeUserStatus(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    // MessageManager
    createTextMessage:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('createTextMessage',param);
        console.log(JSON.stringify(finalParam))
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('createTextMessage');
            this.tencentCloudChatSDK.createTextMessage(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    createTextAtMessage:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('createTextAtMessage',param);
        console.log(JSON.stringify(finalParam))
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('createTextAtMessage');
            this.tencentCloudChatSDK.createTextAtMessage(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    createCustomMessage:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('createCustomMessage',param);
        console.log(JSON.stringify(finalParam))
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('createCustomMessage');
            this.tencentCloudChatSDK.createCustomMessage(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    createImageMessage:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('createImageMessage',param);
        console.log(JSON.stringify(finalParam))
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('createImageMessage');
            this.tencentCloudChatSDK.createImageMessage(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    createSoundMessage:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('createSoundMessage',param);
        console.log(JSON.stringify(finalParam))
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('createSoundMessage');
            this.tencentCloudChatSDK.createSoundMessage(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    createVideoMessage:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('createVideoMessage',param);
        console.log(JSON.stringify(finalParam))
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('createVideoMessage');
            this.tencentCloudChatSDK.createVideoMessage(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    createFileMessage:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('createFileMessage',param);
        console.log(JSON.stringify(finalParam))
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('createFileMessage');
            this.tencentCloudChatSDK.createFileMessage(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    createLocationMessage:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('createLocationMessage',param);
        console.log(JSON.stringify(finalParam))
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('createLocationMessage');
            this.tencentCloudChatSDK.createLocationMessage(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    createFaceMessage:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('createFaceMessage',param);
        console.log(JSON.stringify(finalParam))
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('createFaceMessage');
            this.tencentCloudChatSDK.createFaceMessage(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    createMergerMessage:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('createMergerMessage',param);
        console.log(JSON.stringify(finalParam))
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('createMergerMessage');
            this.tencentCloudChatSDK.createMergerMessage(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    createForwardMessage:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('createForwardMessage',param);
        console.log(JSON.stringify(finalParam))
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('createForwardMessage');
            this.tencentCloudChatSDK.createForwardMessage(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    createTargetedGroupMessage:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('createTargetedGroupMessage',param);
        console.log(JSON.stringify(finalParam))
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('createTargetedGroupMessage');
            this.tencentCloudChatSDK.createTargetedGroupMessage(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    sendMessage:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('sendMessage',param);
        console.log(JSON.stringify(finalParam))
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('sendMessage');
            this.tencentCloudChatSDK.sendMessage(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    setC2CReceiveMessageOpt:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('setC2CReceiveMessageOpt',param);
        console.log(JSON.stringify(finalParam))
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('setC2CReceiveMessageOpt');
            this.tencentCloudChatSDK.setC2CReceiveMessageOpt(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    getC2CReceiveMessageOpt:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('getC2CReceiveMessageOpt',param);
        console.log(JSON.stringify(finalParam))
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('getC2CReceiveMessageOpt');
            this.tencentCloudChatSDK.getC2CReceiveMessageOpt(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    setGroupReceiveMessageOpt:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('setGroupReceiveMessageOpt',param);
        console.log(JSON.stringify(finalParam))
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('setGroupReceiveMessageOpt');
            this.tencentCloudChatSDK.setGroupReceiveMessageOpt(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    getC2CHistoryMessageList:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('getC2CHistoryMessageList',param);
        console.log(JSON.stringify(finalParam))
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('getC2CHistoryMessageList');
            this.tencentCloudChatSDK.getC2CHistoryMessageList(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    getGroupHistoryMessageList:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('getGroupHistoryMessageList',param);
        console.log(JSON.stringify(finalParam))
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('getGroupHistoryMessageList');
            this.tencentCloudChatSDK.getGroupHistoryMessageList(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    getHistoryMessageList:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('getHistoryMessageList',param);
        console.log(JSON.stringify(finalParam))
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('getHistoryMessageList');
            this.tencentCloudChatSDK.getHistoryMessageList(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    revokeMessage:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('revokeMessage',param);
        console.log(JSON.stringify(finalParam))
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('revokeMessage');
            this.tencentCloudChatSDK.revokeMessage(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    modifyMessage:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('modifyMessage',param);
        console.log(JSON.stringify(finalParam))
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('modifyMessage');
            this.tencentCloudChatSDK.modifyMessage(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    markC2CMessageAsRead:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('markC2CMessageAsRead',param);
        console.log(JSON.stringify(finalParam))
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('markC2CMessageAsRead');
            this.tencentCloudChatSDK.markC2CMessageAsRead(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    markGroupMessageAsRead:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('markGroupMessageAsRead',param);
        console.log(JSON.stringify(finalParam))
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('markGroupMessageAsRead');
            this.tencentCloudChatSDK.markGroupMessageAsRead(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    markAllMessageAsRead:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('markAllMessageAsRead',param);
        console.log(JSON.stringify(finalParam))
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('markAllMessageAsRead');
            this.tencentCloudChatSDK.markAllMessageAsRead(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    deleteMessageFromLocalStorage:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('deleteMessageFromLocalStorage',param);
        console.log(JSON.stringify(finalParam))
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('deleteMessageFromLocalStorage');
            this.tencentCloudChatSDK.deleteMessageFromLocalStorage(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    deleteMessages:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('deleteMessages',param);
        console.log(JSON.stringify(finalParam))
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('deleteMessages');
            this.tencentCloudChatSDK.deleteMessages(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    clearC2CHistoryMessage:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('clearC2CHistoryMessage',param);
        console.log(JSON.stringify(finalParam))
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('clearC2CHistoryMessage');
            this.tencentCloudChatSDK.clearC2CHistoryMessage(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    clearGroupHistoryMessage:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('clearGroupHistoryMessage',param);
        console.log(JSON.stringify(finalParam))
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('clearGroupHistoryMessage');
            this.tencentCloudChatSDK.clearGroupHistoryMessage(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    insertGroupMessageToLocalStorage:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('insertGroupMessageToLocalStorage',param);
        console.log(JSON.stringify(finalParam))
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('insertGroupMessageToLocalStorage');
            this.tencentCloudChatSDK.insertGroupMessageToLocalStorage(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    insertC2CMessageToLocalStorage:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('insertC2CMessageToLocalStorage',param);
        console.log(JSON.stringify(finalParam))
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('insertC2CMessageToLocalStorage');
            this.tencentCloudChatSDK.insertC2CMessageToLocalStorage(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    findMessages:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('findMessages',param);
        console.log(JSON.stringify(finalParam))
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('findMessages');
            this.tencentCloudChatSDK.findMessages(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    searchLocalMessages:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('searchLocalMessages',param);
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('searchLocalMessages');
            this.tencentCloudChatSDK.searchLocalMessages(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    sendMessageReadReceipts:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('sendMessageReadReceipts',param);
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('sendMessageReadReceipts');
            this.tencentCloudChatSDK.sendMessageReadReceipts(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    getMessageReadReceipts:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('getMessageReadReceipts',param);
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('getMessageReadReceipts');
            this.tencentCloudChatSDK.getMessageReadReceipts(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    getGroupMessageReadMemberList:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('getGroupMessageReadMemberList',param);
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('getGroupMessageReadMemberList');
            this.tencentCloudChatSDK.getGroupMessageReadMemberList(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    setMessageExtensions:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('setMessageExtensions',param);
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('setMessageExtensions');
            this.tencentCloudChatSDK.setMessageExtensions(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    getMessageExtensions:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('getMessageExtensions',param);
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('getMessageExtensions');
            this.tencentCloudChatSDK.getMessageExtensions(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    deleteMessageExtensions:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('deleteMessageExtensions',param);
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('deleteMessageExtensions');
            this.tencentCloudChatSDK.deleteMessageExtensions(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    downloadMessage:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('downloadMessage',param);
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('downloadMessage');
            this.tencentCloudChatSDK.downloadMessage(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    getMessageOnlineUrl:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('getMessageOnlineUrl',param);
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('getMessageOnlineUrl');
            this.tencentCloudChatSDK.getMessageOnlineUrl(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    getJoinedGroupList:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('getJoinedGroupList',param);
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('getJoinedGroupList');
            this.tencentCloudChatSDK.getJoinedGroupList(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    getGroupsInfo:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('getGroupsInfo',param);
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('getGroupsInfo');
            this.tencentCloudChatSDK.getGroupsInfo(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    searchGroups:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('searchGroups',param);
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('searchGroups');
            this.tencentCloudChatSDK.searchGroups(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    setGroupInfo:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('setGroupInfo',param);
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('setGroupInfo');
            this.tencentCloudChatSDK.setGroupInfo(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    initGroupAttributes:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('initGroupAttributes',param);
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('initGroupAttributes');
            this.tencentCloudChatSDK.initGroupAttributes(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    setGroupAttributes:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('setGroupAttributes',param);
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('setGroupAttributes');
            this.tencentCloudChatSDK.setGroupAttributes(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    deleteGroupAttributes:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('deleteGroupAttributes',param);
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('deleteGroupAttributes');
            this.tencentCloudChatSDK.deleteGroupAttributes(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    getGroupAttributes:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('getGroupAttributes',param);
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('getGroupAttributes');
            this.tencentCloudChatSDK.getGroupAttributes(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    getGroupOnlineMemberCount:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('getGroupOnlineMemberCount',param);
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('getGroupOnlineMemberCount');
            this.tencentCloudChatSDK.getGroupOnlineMemberCount(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    getGroupMemberList:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('getGroupMemberList',param);
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('getGroupMemberList');
            this.tencentCloudChatSDK.getGroupMemberList(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    getGroupMembersInfo:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('getGroupMembersInfo',param);
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('getGroupMembersInfo');
            this.tencentCloudChatSDK.getGroupMembersInfo(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    searchGroupMembers:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('searchGroupMembers',param);
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('searchGroupMembers');
            this.tencentCloudChatSDK.searchGroupMembers(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    setGroupMemberInfo:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('setGroupMemberInfo',param);
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('setGroupMemberInfo');
            this.tencentCloudChatSDK.setGroupMemberInfo(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    muteGroupMember:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('muteGroupMember',param);
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('muteGroupMember');
            this.tencentCloudChatSDK.muteGroupMember(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    inviteUserToGroup:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('inviteUserToGroup',param);
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('inviteUserToGroup');
            this.tencentCloudChatSDK.inviteUserToGroup(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    kickGroupMember:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('kickGroupMember',param);
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('kickGroupMember');
            this.tencentCloudChatSDK.kickGroupMember(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    setGroupMemberRole:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('setGroupMemberRole',param);
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('setGroupMemberRole');
            this.tencentCloudChatSDK.setGroupMemberRole(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    markGroupMemberList:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('markGroupMemberList',param);
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('markGroupMemberList');
            this.tencentCloudChatSDK.markGroupMemberList(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    transferGroupOwner:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('transferGroupOwner',param);
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('transferGroupOwner');
            this.tencentCloudChatSDK.transferGroupOwner(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    getGroupApplicationList:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('getGroupApplicationList',param);
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('getGroupApplicationList');
            this.tencentCloudChatSDK.getGroupApplicationList(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    acceptGroupApplication:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('acceptGroupApplication',param);
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('acceptGroupApplication');
            this.tencentCloudChatSDK.acceptGroupApplication(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    refuseGroupApplication:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('refuseGroupApplication',param);
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('refuseGroupApplication');
            this.tencentCloudChatSDK.refuseGroupApplication(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    setGroupApplicationRead:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('setGroupApplicationRead',param);
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('setGroupApplicationRead');
            this.tencentCloudChatSDK.setGroupApplicationRead(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    getJoinedCommunityList:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('getJoinedCommunityList',param);
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('getJoinedCommunityList');
            this.tencentCloudChatSDK.getJoinedCommunityList(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    createTopicInCommunity:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('createTopicInCommunity',param);
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('createTopicInCommunity');
            this.tencentCloudChatSDK.createTopicInCommunity(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    deleteTopicFromCommunity:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('deleteTopicFromCommunity',param);
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('deleteTopicFromCommunity');
            this.tencentCloudChatSDK.deleteTopicFromCommunity(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    setTopicInfo:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('setTopicInfo',param);
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('setTopicInfo');
            this.tencentCloudChatSDK.setTopicInfo(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    getTopicInfoList:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('getTopicInfoList',param);
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('getTopicInfoList');
            this.tencentCloudChatSDK.getTopicInfoList(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    invite:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('invite',param);
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('invite');
            this.tencentCloudChatSDK.invite(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    inviteInGroup:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('inviteInGroup',param);
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('inviteInGroup');
            this.tencentCloudChatSDK.inviteInGroup(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    cancel:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('cancel',param);
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('cancel');
            this.tencentCloudChatSDK.cancel(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    accept:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('accept',param);
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('accept');
            this.tencentCloudChatSDK.accept(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    reject:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('reject',param);
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('reject');
            this.tencentCloudChatSDK.reject(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    getSignalingInfo:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('getSignalingInfo',param);
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('getSignalingInfo');
            this.tencentCloudChatSDK.getSignalingInfo(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    addInvitedSignaling:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('addInvitedSignaling',param);
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('addInvitedSignaling');
            this.tencentCloudChatSDK.addInvitedSignaling(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    getConversationList:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('getConversationList',param);
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('getConversationList');
            this.tencentCloudChatSDK.getConversationList(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    getConversationListByConversaionIds:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('getConversationListByConversaionIds',param);
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('getConversationListByConversaionIds');
            this.tencentCloudChatSDK.getConversationListByConversaionIds(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    getConversation:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('getConversation',param);
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('getConversation');
            this.tencentCloudChatSDK.getConversation(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    getConversationListByFilter:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('getConversationListByFilter',param);
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('getConversationListByFilter');
            this.tencentCloudChatSDK.getConversationListByFilter (finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    deleteConversation:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('deleteConversation',param);
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('deleteConversation');
            this.tencentCloudChatSDK.deleteConversation (finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    setConversationDraft:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('setConversationDraft',param);
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('setConversationDraft');
            this.tencentCloudChatSDK.setConversationDraft(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    setConversationCustomData:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('setConversationCustomData',param);
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('setConversationCustomData');
            this.tencentCloudChatSDK.setConversationCustomData(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    pinConversation:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('pinConversation',param);
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('pinConversation');
            this.tencentCloudChatSDK.pinConversation(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    markConversation:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('markConversation',param);
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('markConversation');
            this.tencentCloudChatSDK.markConversation(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    getTotalUnreadMessageCount:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('getTotalUnreadMessageCount',param);
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('getTotalUnreadMessageCount');
            this.tencentCloudChatSDK.getTotalUnreadMessageCount(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    createConversationGroup:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('createConversationGroup',param);
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('createConversationGroup');
            this.tencentCloudChatSDK.createConversationGroup(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    getConversationGroupList:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('getConversationGroupList',param);
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('getConversationGroupList');
            this.tencentCloudChatSDK.getConversationGroupList(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    deleteConversationGroup:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('deleteConversationGroup',param);
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('deleteConversationGroup');
            this.tencentCloudChatSDK.deleteConversationGroup(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    renameConversationGroup:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('renameConversationGroup',param);
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('renameConversationGroup');
            this.tencentCloudChatSDK.renameConversationGroup(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    addConversationsToGroup:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('addConversationsToGroup',param);
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('addConversationsToGroup');
            this.tencentCloudChatSDK.addConversationsToGroup(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    deleteConversationsFromGroup:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('deleteConversationsFromGroup',param);
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('deleteConversationsFromGroup');
            this.tencentCloudChatSDK.deleteConversationsFromGroup(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    getFriendList:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('getFriendList',param);
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('getFriendList');
            this.tencentCloudChatSDK.getFriendList(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    getFriendsInfo:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('getFriendsInfo',param);
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('getFriendsInfo');
            this.tencentCloudChatSDK.getFriendsInfo(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    setFriendInfo:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('setFriendInfo',param);
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('setFriendInfo');
            this.tencentCloudChatSDK.setFriendInfo(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    searchFriends:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('searchFriends',param);
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('searchFriends');
            this.tencentCloudChatSDK.searchFriends(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    addFriend:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('addFriend',param);
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('addFriend');
            this.tencentCloudChatSDK.addFriend(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    deleteFromFriendList:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('deleteFromFriendList',param);
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('deleteFromFriendList');
            this.tencentCloudChatSDK.deleteFromFriendList(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    checkFriend:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('checkFriend',param);
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('checkFriend');
            this.tencentCloudChatSDK.checkFriend(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    getFriendApplicationList:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('getFriendApplicationList',param);
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('getFriendApplicationList');
            this.tencentCloudChatSDK.getFriendApplicationList(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    acceptFriendApplication:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('acceptFriendApplication',param);
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('acceptFriendApplication');
            this.tencentCloudChatSDK.acceptFriendApplication(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    refuseFriendApplication:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('refuseFriendApplication',param);
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('refuseFriendApplication');
            this.tencentCloudChatSDK.refuseFriendApplication(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    deleteFriendApplication:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('deleteFriendApplication',param);
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('deleteFriendApplication');
            this.tencentCloudChatSDK.deleteFriendApplication(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    setFriendApplicationRead:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('setFriendApplicationRead',param);
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('setFriendApplicationRead');
            this.tencentCloudChatSDK.setFriendApplicationRead(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    addToBlackList:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('addToBlackList',param);
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('addToBlackList');
            this.tencentCloudChatSDK.addToBlackList(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    deleteFromBlackList:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('deleteFromBlackList',param);
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('deleteFromBlackList');
            this.tencentCloudChatSDK.deleteFromBlackList(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    getBlackList:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('getBlackList',param);
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('getBlackList');
            this.tencentCloudChatSDK.getBlackList(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    createFriendGroup:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('createFriendGroup',param);
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('createFriendGroup');
            this.tencentCloudChatSDK.createFriendGroup(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    getFriendGroups:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('getFriendGroups',param);
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('getFriendGroups');
            this.tencentCloudChatSDK.getFriendGroups(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    deleteFriendGroup:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('deleteFriendGroup',param);
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('deleteFriendGroup');
            this.tencentCloudChatSDK.deleteFriendGroup(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    renameFriendGroup:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('renameFriendGroup',param);
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('renameFriendGroup');
            this.tencentCloudChatSDK.renameFriendGroup(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    addFriendsToFriendGroup:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('addFriendsToFriendGroup',param);
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('addFriendsToFriendGroup');
            this.tencentCloudChatSDK.addFriendsToFriendGroup(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    deleteFriendsFromFriendGroup:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('deleteFriendsFromFriendGroup',param);
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('deleteFriendsFromFriendGroup');
            this.tencentCloudChatSDK.deleteFriendsFromFriendGroup(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    setOfflinePushConfig:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('setOfflinePushConfig',param);
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('setOfflinePushConfig');
            this.tencentCloudChatSDK.setOfflinePushConfig(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    doBackground:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('doBackground',param);
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('doBackground');
            this.tencentCloudChatSDK.doBackground(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
    doForeground:function({...p}){
        let param = arguments[0];
        let finalParam = compareParam('doForeground',param);
        if("error" in finalParam){
            return new Promise((resolve,reject)=>{
                reject(finalParam);
            })
        }
        return new Promise((resolve,reject)=>{
            let result = addResponseType('doForeground');
            this.tencentCloudChatSDK.doForeground(finalParam,function(data,err){
                if(err){
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            else{
                result.data = data ; 
                resolve(result);
            }});
        })
    },
};



;(function initFunction(){
    Object.keys(params).forEach((key)=>{
        if(!(key in tencentCloudChat)){

            let parr = Object.keys(params[key].param);
            let p = {};
            parr.forEach((pa)=>{
                const paramItem = params[key].param[pa];
                if(paramItem.required){
                    p[pa] =  paramItem.default;
                }else{
                    p[pa] =  null;
                }
            })
            tencentCloudChat[key] = function({...p}){
                let param = arguments[0];
                let finalParam = compareParam(key,param);
                console.log(JSON.stringify(finalParam))
                if("error" in finalParam){
                    return new Promise((resolve,reject)=>{
                        reject(finalParam);
                    })
                }
                return new Promise((resolve,reject)=>{
                    
                    let func = "let result = addResponseType(key);this.tencentCloudChatSDK."+key+"(finalParam,function(data,err){if(err){console.log(JSON.stringify(err));reject(err);}else{;result.data = data ; resolve(result);}});"
                    eval(func)
                })
            }
        }
        
    })
})();

