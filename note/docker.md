##### Docker-compose

概念

- 服务，就是同时运行一个或多个容器，好处是不需要一个个的单独的启动某个容器
- 容器编排, 就是容器之间的依赖, 比如`A服务`依赖于`B服务`, 就必须先让`B服务`先运行

常用命令

- `docker-compose-up -d` 后台启动服务

- `docker-compose stop` 停止服务 

  

##### Docker-swarm

概念

- Swarm，以集群的方式管理 Node
- Node，本身是一个 docker 引擎，分为管理者节点和工作者节点
- Service，Node 中运行的某项服务
-  Task，Service 中运行的某项任务

常用命令

- `docker swarm init --advertise-addr <MANAGER-IP>` 创建管理者节点
  
  - `docker swarm join-token manager` 获取加入管理者节点的 token
- `docker swarm join-token worker` 获取加入工作节点的 token
  
- `docker swarm join --token <TOKEN>` 加入到某个节点

- 管理者节点特有的

  - `docker service create -p 8888:80 --name my-nginx nginx` 创建一个 service, docker service 命令只能在管理者节点上运行

    - `--mode global` 在哪都能跑
    - `--mode replicated` 只能在副本上跑
  
- `docker service ls` 当前已经运行的 service 列表
  
- `docker service update --replicas 3 my-nginx` 创建三个 service 副本，会在工作节点中随机创建, 创建完成后每个节点都能单独的访问
  
- `docker service update --replicas 1 my-nginx` 回滚到一个 service 副本
  
  - `docer service scale my-nginx 3` 和 `docker service update --replicas 3 my-nginx` 功能大概一致
  
    

##### Dcker-swarm Raft 协议

概念

- 保证大多数节点存活才可以用

- 至少保证有3个manage节点，如果只有2个节点其中1个节点挂了另1个节点是不可用的，但是有3个节点其中1个节点挂了另外2个节点能接着用（假设这2个中1个节点挂了，那另外1个节点也不可用）



