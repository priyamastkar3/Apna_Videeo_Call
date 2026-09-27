let IS_PROD = true;
const server = IS_PROD ?   
     "https://apna-videeo-call-backend.onrender.com" :
     "http://localhost:8000"

export default server;     

