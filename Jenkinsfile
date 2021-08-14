node {
    git poll: true, url:'https://github.com/Info-Lapio/Backend_Infowargame_v2.git'
        {
            stage('Pull') {
                git 'https://github.com/Info-Lapio/Backend_Infowargame_v2.git' 
            } 
            stage('Build') { 
                sh(script: 'yarn && yarn build')
            } 
            stage('Unit Test') { 
                sh(script: 'yarn test')
            }
            stage('Deploy') { 
               sh(script: 'pm2 start yarn --interpreter bash --name InfoWargame -- start')
            } 
        } 
    
}
