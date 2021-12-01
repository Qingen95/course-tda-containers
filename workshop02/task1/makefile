namespace=bggns

all:
	@watch -n2 kubectl get pod,svc,deploy -n${namespace} -owide

svc:
	@watch -n2 kubectl get svc -n${namespace} -owide

deploy:
	@watch -n2 kubectl get deploy -n${namespace} -owide