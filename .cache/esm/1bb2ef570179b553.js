let JWT_SECRET,jwt;_017‍.x([["default",()=>_017‍.o]]);_017‍.w("../config",[["JWT_SECRET",["JWT_SECRET"],function(v){JWT_SECRET=v}]]);_017‍.w("jsonwebtoken",[["default",["jwt"],function(v){jwt=v}]]);


class JwtService {
    static sign(payload, expiry = '1m', secret = JWT_SECRET) {
        return jwt.sign(payload, secret, { expiresIn: expiry });
    }

    static verify(token, secret = JWT_SECRET) {
        return jwt.verify(token, secret);
    }
}

_017‍.d(JwtService);