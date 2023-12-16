export interface IAuthState {
isLoading:boolean;
isAuthenticated:boolean;
userDetails: IUserDetails | null;

}

export interface IUserDetails {
    userName:string;
    fullname:string;
    email?:string;
    phoneNumber?:string
}

export const IUserDetailsInitialState:IUserDetails={
userName:"",
fullname:"",
email:"",
phoneNumber:""
}

export const IAuthStateInitialState:IAuthState={
    isLoading:false,
    isAuthenticated:false,
    userDetails:IUserDetailsInitialState,
   
}