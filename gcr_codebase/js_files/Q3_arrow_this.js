const user = {
    name: "Priyanshi",
    showName: () => {
        console.log(this.name);
    }
};

user.showName();

const fixedUser = {
    name: "Priyanshi",
    showName: function () {
        console.log(this.name);
    }
};

fixedUser.showName();
