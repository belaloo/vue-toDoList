var app = new Vue({
  el: "#container",
  data: {
    tasks: [],
    taskText: ""
  },
  methods: {
    addTask: function () {
      this.tasks.push({ words: this.taskText, done: false });
      this.taskText = "";
    },
    deleteTask: function (index) {
      this.tasks.splice(index, 1);
    },
    deleteAll: function () {
      this.tasks = [];
    }
  }
});