

api文档


完成度

- [ ] 首页信息加载
- [ ] 白条
- [ ] 金条
   


1.  [首页信息加载](#首页信息加载)
2.  [白条](#白条)



***

### 首页信息加载

/index/customer/info/{jdpin}/{phone}/{idNo}


| 参数名         | 参数描述           |
| ------------- |:-------------:|
| jdpin|京东pin|
| mobile|联系手机|
| verifiedMobil|绑定手机|
| isAuthorized|是否实名|
| authorizedTime|实名认证时间|
| hasXJK|是否开通小金库|
| hasIOU|是否开通白条|
| authorizedType|证件类型|
| authorizedId|证件号码|
| allAmount|总资产|
| walletAmount|钱包余额|
| xjkAmount|小金库余额|
| financeAmount|理财余额|
| crAmount|总负债|
| iouCrAmount|白条总欠款|
| iouPlusCrAmount|白+总欠款|
| iouCr7Amount|白条近7日待还|
| iouPlusCr7Amount|白+近7日待还|


```js
{	
    "code": "000",	
    "msg": "success",	
    "hotInfo": {	
        "bindMobile": "12345678900",	
        "regMobile": "12345678900",	
        "autoRepay": "否",	
        "autoRepayModifiedDate": "2017-03-30 17:00:00",	
        "accountStat": "正常用户",	
        "iouType": "普通白条",	
        "hasIOUCard": "否",	
        "crAmount": "18542.00",	
        "amount": "16283.00",	
        "freeDays": "30",	
        "iouCr7Amount": "1928.00",	
        "iouTotalLoan": "1928.00",	
        "crStat": "有效",	
        "crDate": "2014-01-01 00:00:00 - 2017-03-30 00:00:00",	
        "activate": "已激活",	
        "isDiffPrice": "否",	
        "feeRate": "0.5%",	
        "overFeeRate": "0.05%",	
        "validCoupon": "10",	
        "usedCoupon": "50"	
    }	
}	


```


***


### 白条

index/customer/biz/{biz}/{jdpin}


| 参数名         | 参数描述           |
| ------------- |:-------------:|
| bindMobile| 	白条现绑定手机号| 
| regMobile| 	白条激活时手机号| 
| autoRepay| 	是否自动还款| 
| autoRepayModifiedDate| 	自动还款变更时间| 
| accountStat| 	账户状态| 
| iouType| 	白条类型| 
| hasIOUCard| 	是否开通联名卡| 
| crAmount| 	实际授信额度| 
| amount| 	可用额度| 
| freeDays| 	免息天数| 
| iouCr7Amount| 	白条近7日待还| 
| iouTotalLoan| 	白条总共待还| 
| crStat| 	授信状态| 
| crBeginDate| 	授信开始时间| 
| crEndDate| 	授信结束时间| 
| crDate| 	授信时间段| 
| activate| 	激活状态| 
| isDiffPrice| 	是否差异化定价| 
| feeRate| 	实际分期费率| 
| overFeeRate| 	实际逾期费率| 
| validCoupon| 	可用优惠券| 
| usedCoupon| 	已使用优惠券| 


```js
{	
    "code": "000",	
    "msg": "success",	
    "hotInfo": {	
        "bindMobile": "12345678900",	
        "regMobile": "12345678900",	
        "autoRepay": "否",	
        "autoRepayModifiedDate": "2017-03-30 17:00:00",	
        "accountStat": "正常用户",	
        "iouType": "普通白条",	
        "hasIOUCard": "否",	
        "crAmount": "18542.00",	
        "amount": "16283.00",	
        "freeDays": "30",	
        "iouCr7Amount": "1928.00",	
        "iouTotalLoan": "1928.00",	
        "crStat": "有效",	
        "crDate": "2014-01-01 00:00:00 - 2017-03-30 00:00:00",	
        "activate": "已激活",	
        "isDiffPrice": "否",	
        "feeRate": "0.5%",	
        "overFeeRate": "0.05%",	
        "validCoupon": "10",	
        "usedCoupon": "50"	
    }	
}	


```


