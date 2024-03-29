"use strict";

(function(core) {

    class User {

        constructor(displayName = "", emailAddress = "", userName = "", password = "") {
            this._displayName = displayName;
            this._emailAddress = emailAddress;
            this._userName = userName;
            this._password = password;
        }

        get displayName() {
            return this._displayName;
        }

        set displayName(value) {
            this._displayName = value;
        }

        get emailAddress() {
            return this._emailAddress;
        }

        set emailAddress(value) {
            this._emailAddress = value;
        }

        get userName() {
            return this._userName;
        }

        set userName(value) {
            this._userName = value;
        }


        toString() {
            return `DisplayName: ${this._displayName} 
                \nEmailAddress: ${this._emailAddress}\n Username: ${this._userName}\n`;
        }

        /**
         * Serialize for writing to localstorage
         * @returns {null|string}
         */
        serialize() {
            if (this._displayName !== "" && this._emailAddress !== "" && this._userName !== "") {
                // return `${this.displayName},${this.emailAddress},${this.userName}`;
                return `${this._displayName},${this._emailAddress},${this._userName}`;
            }
            console.error("One or more properties of the Contact are empty or invalid")
            return null;
        }

        /**
         * Deserialize is used to read data from localStorage
         * @param data
         */
        deserialize(data) {
            //
            let propertyArray = data.split(",");
            this._displayName = propertyArray[0];
            this._emailAddress = propertyArray[1];
            this._userName = propertyArray[2];
        }

        toJson(){
            return{
                DisplayName : this._displayName,
                EmailAddress : this._emailAddress,
                Username : this._userName,
                Password : this.Password
            }
        }

        fromJson(data){
            this._displayName = data.DisplayName;
            this._emailAddress = data.EmailAddress;
            this._userName = data.Username;
            this._password = data.Password
        }

    }
    core.User = User;
})(core || (core = {}));