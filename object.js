const student = {
    fullName : "Gajanan Raje",
    mark : 86.40,
    printMarks : function() {
        console.log("mark = ", this.mark);
    }
}; 

const emplyoe = {
    Emtax() {
        console.log("tax rate is 10%");
    },
};

const Gajanan = {
    saraly : 50000,
};

Gajanan.__proto__ = emplyoe;