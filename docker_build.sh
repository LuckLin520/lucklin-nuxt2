
#!/bin/sh
echo "开始执行$0........................" 
imageName='nuxtimg'
containerName='my_nuxt'
port=3000
outPort=3000
startEnv=$1
echo "准备发布scripts：${startEnv}>>>>>>>>>>>>>>>>>>"
if [[ -n $(docker ps -q -f name=${containerName}) ]]; then
    docker stop ${containerName}
    echo "容器${containerName}已停止！！！"
    docker rm ${containerName}
    echo "容器${containerName}已删除！！！"
    docker rmi ${imageName}
    echo "镜像${nuxtimg}已删除！！！"
    docker build -t ${imageName} .
    echo "镜像${nuxtimg}已构建！！！"
    docker run -d --name ${containerName} -p ${outPort}:${port} ${imageName} ${startEnv}
    echo "容器${containerName}已运行！！！"
else
    if [[ -n $(docker ps -a -q -f name=${containerName}) ]]; then
        docker rm ${containerName}
        echo "容器${containerName}已删除！！！"
        docker rmi ${imageName}
        echo "镜像${nuxtimg}已删除！！！"
        docker build -t ${imageName} .
        echo "镜像${nuxtimg}已构建！！！"
        docker run -d --name ${containerName} -p ${outPort}:${port} ${imageName} ${startEnv}
        echo "容器${containerName}已运行！！！"
    else
        if [[ -n $(docker images -q ${imageName}) ]]; then
            docker rmi ${imageName}
            echo "镜像${nuxtimg}已删除！！！"
            docker build -t ${imageName} .
            echo "镜像${nuxtimg}已构建！！！"
            docker run -d --name ${containerName} -p ${outPort}:${port} ${imageName} ${startEnv}
            echo "容器${containerName}已运行！！！"
        else
            docker build -t ${imageName} .
            echo "镜像${nuxtimg}已构建！！！"
            docker run -d --name ${containerName} -p ${outPort}:${port} ${imageName} ${startEnv}
            echo "容器${containerName}已运行！！！"
        fi
    fi
fi