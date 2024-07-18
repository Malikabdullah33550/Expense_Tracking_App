FROM node:lts-alpine3.20
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm" , "start"]

#run the following command after opening docker engine
# docker build -t [nameYourImage]
# docker images
# docker run -p [HostPORT]:[3000] -it [imagename]