- crear un auto-escalado
  kubectl autoscale deployment front-deployment --cpu-percent=90 --min=1 --max=10

- generar carga al deployment
  kubectl run -i --tty load-generator --rm --image=busybox:1.28 --restart=Never -- /bin/sh -c "while sleep 0.01; do wget -q -O- http://front-service:3000; done"
