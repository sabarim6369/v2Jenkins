pipeline {
  agent any

  stages {
    stage('Run Node Docker') {
      steps {
        sh 'docker run  node:16-alpine node --version'
      }
    }
  }
}
