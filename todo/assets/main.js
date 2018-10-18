$todoVue = new Vue({
  el: '.todo',
  data: {
    header: 'Todo',
    task: '',
    list: []
  },
  methods: {
    newTask(e){
      e.preventDefault();

      if(this.task.length)
      {
        this.list.push(this.task);

        this.task = '';
      }

      // this.toggleNewTask();
    },
    removeTask(task){
      // Remove task from list
      this.list.splice( task, 1 );
    },
    checkTask(e){
      // Defualts
      var $selected   = $(e.srcElement),
          $text       = $selected.text(),
          $target     = $selected.closest('div').children('p'),
          $checked    = $target.attr('checkedTask'),
          $html       = $checked === 'false'? $text: '<s>'+$text+'</s>';

      // Check if it's the trash
      if($selected.closest('button').length)
      {
        return false;
      }

      // Set the content of the task
      $target.html($html);

      // Switching checked state
      $target.attr('checkedTask', $checked === 'true'? false : true);
    },
    toggleNewTask(e){
      var $this = this
          $target = $('#newTask');

      // Toggle new task and register blur
      if($target.is( ":visible" ))
      {
        $target.slideUp();
        $('#addTask').slideDown();
      }
      else
      {
        $target.slideDown()
                      .find('input')
                        .focus()
                          .blur(
                            function(evn){
                              $this.toggleNewTask();
                            }
                          );

        $('#addTask').slideUp();
      }
    }
  }
});
