var patientRecordApp = new Vue({
  el: '#patientRecordApp',
  data: {
    patients: [],
    formPatient: {
      firstName: '',
      lastName: '',
      dob: '',
      sexAtBirth: ''
    }
  },
  methods: {
    fetchPatients() {
      fetch('dummy.php')
      .then(response => response.json())
      .then(json => {patientRecordApp.patients = json});

      // Means the same at this
      // fetch('https://randomuser.me/api/')
      // .then(function(response) {return response.json()})
      // .then(function(json) {waitingApp.people = json});

    }
  },
  created() {
    this.fetchPatients();
  }

})
