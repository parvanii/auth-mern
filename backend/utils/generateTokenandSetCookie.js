import jwt from 'jsonwebtoken'

export const generateTokenandSetCookie=(res,userId)=>{
 const token =jwt.sign({userId},process.env.JWT_SECRET,{ //jwt.sign({payload},scret,{options})
  expiresIn: "7d" 
 });

res.cookie("token",token,{ //name of cookie set to token
httpOnly:true,
secure:process.env.NODE_ENV ==="production" ? true : false,
sameSite:"lax",
maxAge:7*24*60*60*1000
});
return token;
}