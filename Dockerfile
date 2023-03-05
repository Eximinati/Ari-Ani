FROM quay.io/lyfe00011/md:beta
RUN git clone https://github.com/Eximinati/Ari-bot-Ani.git /root/Ari-Ani/
WORKDIR /root/Ari-Ani/
RUN yarn install --network-concurrency 1
CMD ["node", "heart.js"]
