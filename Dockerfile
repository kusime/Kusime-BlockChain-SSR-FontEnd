FROM node:16-alpine
# ARG avliable during the build time
WORKDIR /nuxt/prod/
COPY .output ./.output
ARG DEFAULT_PORT=9000
# ENV the runtime environment
ENV PORT ${DEFAULT_PORT}
# use ENV definded variables can be used during the building
EXPOSE $PORT

CMD [ "node" ,".output/server/index.mjs" ]