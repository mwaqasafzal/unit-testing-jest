module.exports={
  login:(username,password)=>{
      const users=[{username:'waqas',password:'testpassword'},{username:'jimmy',password:'testpassword'}];
      for(const user of users){
          const {username:name,password:pass} = user;
          if(username==name && password==pass){
              return true;
          }
      }
      return false;
  }
};
