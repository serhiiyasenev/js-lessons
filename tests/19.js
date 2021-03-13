const students = [{email: "test2"}, {email: "test1"}];
const result1 = students.find(e => e.email === "test1");
const result2 = students.find(e => e.email === "test4");

if (Test(students)) {
    console.log("1");
} else {
    console.log("1");
}

function Test(students){
    if (Array.isArray(students)) {
        if (students.find(e => e.email === "test1")) {
            return null;
        }
        return true;
    }
}