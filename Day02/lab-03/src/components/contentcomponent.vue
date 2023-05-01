<template>
    <div>
        <div class="card-header d-flex justify-content-between align-items-center">
            <h1 class="card-title">Students Data</h1>
            <button class="btn btn-primary" data-bs-target="#exampleModal" data-bs-toggle="modal">Add New Student</button>
        </div>
        <table class="table table-dark table-bordered table-hover table-responsive">

            <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(student,i) in students">
                <td>{{ i + 1 }}</td>
                <td>{{ student.name }}</td>
                <td>{{ student.age }}</td>
            </tr>
            </tbody>
            <tfoot>
            <tr>
                <td colspan="2">Total Students</td>
                <td>{{ students.length }}</td>

            </tr>
            </tfoot>
        </table>
        <!-- Modal -->
        <div id="exampleModal" aria-hidden="true" aria-labelledby="exampleModalLabel" class="modal fade" role="dialog"
             tabindex="-1">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 id="exampleModalLabel" class="modal-title">Add Student</h5>
                        <button aria-label="Close" class="close" data-bs-dismiss="modal" type="button">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form action="" class="form-group needs-validation" novalidate>
                            <div class="form-group">
                                <div class="forms-inputs mb-4"> <span>name</span> <input type="text" v-model="name" v-bind:class="{'form-control':true, 'is-invalid' : !validname(name) && nameBlured}" v-on:blur="nameBlured = true">
                                    <div class="invalid-feedback">A valid name is required!</div>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="forms-inputs mb-4"> <span>Age</span> <input type="text" v-model="age" v-bind:class="{'form-control':true, 'is-invalid' : !validAge(age) && ageBlured}" v-on:blur="ageBlured = true">
                                    <div class="invalid-feedback">A valid Age is required!</div>
                                </div>
                            </div>

                        </form>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-secondary" data-bs-dismiss="modal" type="button">Close</button>
                        <button class="btn btn-primary" v-on:click.stop.prevent="submit">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "contentcomponent",
    data: () => ({
        students: [
            {id: 1, name: "John", age: 20},
            {id: 2, name: "Mary", age: 21},
            {id: 3, name: "Peter", age: 22},
            {id: 4, name: "Jane", age: 23},
        ],
        name:"",
        nameBlured:false,
        age: "",
        ageBlured:false,
    }),
    methods: {
        getLastId() {
            return this.students[this.students.length - 1].id + 1;
        },
        addStudent() {
            this.students.push(
                {
                    id: this.getLastId(),
                    name: this.name,
                    age: this.age
                }
            );
            this.name = "";
            this.age = "";
            $("#exampleModal").modal("hide");
        },
        validate : function(){
            this.nameBlured = true;
            this.ageBlured = true;
            if( this.validAge(this.age) && this.validname(this.name)){
                this.valid = true;
            }
        },


        validname : function(name) {
            if (/\s/.test(name)) {
                return true;
            }
        },

        validAge : function(age) {
            if (age >= 16 && age <= 25 ) {
                return true;
            }
        },

        submit : function(){
            this.validate();
            if(this.valid){
                this.addStudent();
                this.nameBlured = false;
                this.ageBlured = false;
                this.valid = false
            }
        }
    }
}
</script>

<style scoped>

</style>