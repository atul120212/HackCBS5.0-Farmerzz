var sid = 'AC94205b041f9f29fec7266b2dd816f7f7'
var auth_token = '83799b79cfec5ce164b7a884bd287dde'
var twilio = require('twilio')(sid,auth_token)



twilio.messages.create({
    from:"+18654242846",
    to:'+919717267311',
    body:"Hi Farmer,please check your farms there may be some weather changes which may affect your crops.Please be aware",
})
.then((res)=>console.log('message has sent!'))
.catch((err) => {
    console.log(err);
});