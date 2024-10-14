import jwt from 'jsonwebtoken';
const KEY = "$--FEELGOOD--$"

export function createToken(token) {
    return jwt.sign(token, KEY);
}

export function readToken(token) {
    return jwt.verify(token, KEY);
}


export function autenticar(req, resp, next) {
    try {
        let token = req.headers['v-access-token'];
        
        if(token === undefined)
            token = req.query['v-access-token']

        let signd = jwt.verify(token, KEY);

        req.user = signd;
        
        next();

    } 
    
    catch (e) {
        resp.status(401).end()
    }
}


