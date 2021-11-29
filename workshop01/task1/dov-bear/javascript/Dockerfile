FROM node:17

## Build Stage

ARG APP_DIR=/app

WORKDIR ${APP_DIR}

# You need to know what to add
# Copy files from local to image
ADD main.js .
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
ENV APP_DIR=/app PORT=3000

WORKDIR ${APP_DIR}

# Need to tell server what port to open
EXPOSE ${PORT}

# Should only return 0 or 1
# || exit 1 such that if /healthz returns 0, it is successful and won't execute exit 1
# if /healthz returns not 0, it is not successful and so will execute exit 1
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \ 
    CMD curl http://localhost${PORT}/healthz || exit 1

# Run the app (entrypoint or CMD)
# Entrypoint something like Java's main
ENTRYPOINT [ "node" , "main"]

# Usually used to configure entrypoint (i.e. add more arguments to entrypoint's command)
# CMD's value can be overridden since it's only part of a command
# CMD [ "--port" , "3000"]