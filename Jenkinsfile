pipeline{
    agent any
    environment {
            CI = 'false'
        }

    tools {nodejs "node"}

    stages {
        stage('Build Frontend') {
            steps {
                bat 'cd client && npm install'
                bat 'cd client && npm run build'
            }
        }
        stage('Build Backend') {
            steps {
                bat 'cd server && npm install'
            }
        }
        stage('Test') {
            steps {
                bat 'cd server && npm run test'
            }
        }
    }
}