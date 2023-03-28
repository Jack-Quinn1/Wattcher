pipeline{
    agent any
    environment {
            CI = 'false'
            TEST_DATABASE_URL = credentials('test_database_url')
            TEST_DATABASE_URL1 = credentials('test_database_url1')
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