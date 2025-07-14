pipeline {
  agent any

  stages {
    stage('Start Node Container') {
      steps {
        sh 'docker run -d --name my-node node:16-alpine tail -f /dev/null'
      }
    }
  }
}
