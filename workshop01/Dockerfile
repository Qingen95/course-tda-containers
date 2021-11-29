FROM node:17

## Build Stage

ARG APP_DIR=/app

WORKDIR ${APP_DIR}

# You need to know what to add
# Copy files from local to image
ADD server.js .
ADD package.json .
ADD package-lock.json .

# Cannot use . as destination if not will spread out
# You can also add from git repository
# You can also add everything, then include .Dockerignore file
ADD public public
ADD views views

# Install dependancies
RUN npm ci

# Run Stage (totally different process from build stage)
# Only for env var can you put in one line
ENV APP_DIR=/app PORT=8080

WORKDIR ${APP_DIR}

# Need to tell server what port to open
EXPOSE ${PORT}

# Run the app (entrypoint or CMD)
# Entrypoint something like Java's main
ENTRYPOINT [ "npm" , "start"]

# Usually used to configure entrypoint (i.e. add more arguments to entrypoint's command)
# CMD's value can be overridden since it's only part of a command
# CMD [ "--port" , "3000"]