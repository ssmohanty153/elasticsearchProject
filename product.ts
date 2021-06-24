export class Product {
     Id : number;
     Title : string;
     Price : number;
     inStock : boolean;
     color:string;
  }


  const date = (): string => {
   return new Date().toISOString();
};




const info = (name: string, message: string, object?: any) => {

   if (object) {

       console.info(`[${date()}] [INFO] [${name}] ${message}`, object);
   } else {
       console.info(`[${date()}] [INFO] [${name}] ${message}`);
   }

};



const warn = (name: string, message: string, object?: any) => {
   if (object) {
       console.warn(`[${date()}] [WARN] [${name}] ${message}`, object);

   } else {

       console.warn(`[${date()}] [WARN] [${name}] ${message}`);
   }
};




const error = (name: string, message: string, object?: any) => {
   if (object) {

       console.error(`[${date()}] [ERROR] [${name}] ${message}`, object);

   } else {
       console.error(`[${date()}] [ERROR] [${name}] ${message}`);
   }
};



const debug = (name: string, message: string, object?: any) => {
   if (object) {
       console.debug(`[${date()}] [DEBUG] [${name}] ${message}`, object);
   } else {
       console.debug(`[${date()}] [DEBUG] [${name}] ${message}`);
   }
};



export default {
   info,
   warn,
   error,
   debug
};