let data =  require("./data")

let name_map=data.name_map;

module.exports = class {
    onCreate() {
        this.state = {
            first_age: name_map.first.data.age,
            second_age: name_map.second.data.age,
            third_age: name_map.third.data.age,
            first_name: name_map.first.data.name,
        
            second_name:name_map.second.data.name,
            third_name:name_map.third.data.name,
            first_title:name_map.first.data.title,
            second_title:name_map.second.data.title,
            third_title:name_map.third.data.title
        };

    }

    incrementrajat() {
        this.state.first_age++;
    }   
    incrementamrita() {
        this.state.second_age++;
    }
    incrementsana() {
        this.state.third_age++;
    }
}