node {
    git poll: true, url:'https://github.com/Info-Lapio/Backend_Infowargame_v2.git'
        {
            stage('Pull') {
                git 'https://github.com/Info-Lapio/Backend_Infowargame_v2.git' 
            } 
            stage('Build') { 
                sh(script: 'yarn && yarn build && yarn start')
            } 
            stage('Unit Test') { 
                sh(script: 'yarn test')
            }
            stage('Push') { 
            } 
            stage('Deploy') { 
               
            } 
        } 
    
}
