build:
  docker:
    mongodb: ./images.docker/mongodb/Dockerfile
release:
  command:
    - ./deployment-tasks.sh
  image: mongodb
run:
  worker: python myworker.py