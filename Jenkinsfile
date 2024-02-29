pipeline {
    environment {
        dockerimagename = "mouadnait/atlasdev"
        dockerImage = ""
    }

    agent any

    stages{
        stage('Checkout Source'){
            steps{
                checkout scmGit(branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/salah-koulal/AtlasDev']])
            }
        }
        stage('Build Docker image'){
            steps{
                script{
                    dockerImage = docker.build dockerimagename
                }
            }
        }
        stage('Pushing Image') {
            environment {
                registryCredential = 'dockerhublogin'
            }
            steps{
                script{
                        docker.withRegistry( 'https://registry.hub.docker.com', registryCredential ) {
                        dockerImage.push("v1.0")
                    }
                }
            }
        } 
    }
}
