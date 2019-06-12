pipeline {
    agent {
      node {
        // spin up a pod to run this build on
        label 'nodejs'
      }
    }
    options {
        // set a timeout of 45 minutes for this pipeline builds are way to slow need to figure out why
        timeout(time: 45, unit: 'MINUTES')
    }
    stages {
        stage('preamble') {
            steps {
                script {
                    openshift.withCluster() {
                        openshift.withProject("shared-components") {
                            echo "Using project: ${openshift.project()}"
                        }
                    }
                }
            }
        }



        stage('npm install') {
            steps {
                script {
                    openshift.withCluster() {
                        openshift.withProject("shared-components") {
			   sh'''#!/bin/bash
			    npm install
			    '''
		                  
                        }
                    }
                } // script
            } // steps
        } // stage
   

  	stage('Publish') {
            steps {

                script {
                    openshift.withCluster() {
                        openshift.withProject("shared-components") {
				
                             	echo "Publishing package to registry"
			     	sh '''#/bin/bash
			   	  npm --registry http://do-prd-mvn-01.do.viaa.be:8081/repository/npm-group/ publish
		                '''
                        }
                    }
                } // script
            } // steps
        } // stage
    } // stages
} // pipeline
