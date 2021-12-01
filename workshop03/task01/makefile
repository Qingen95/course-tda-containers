NAMESPACE=ws3

deploy_db:
	@kubectl apply -f deploy_db.yml -n${NAMESPACE} && \
		watch kubectl get all -owide -n${NAMESPACE}

v1:
	@kubectl apply -f deploy_v1.yml -n${NAMESPACE} && \
		watch kubectl get all -owide -n${NAMESPACE}

v2:
	@kubectl apply -f deploy_v2.yml -n${NAMESPACE} && \
		watch kubectl get all -owide -n${NAMESPACE}

ingress:
	@kubectl apply -f ingress.yml -n${NAMESPACE}