# cncparis161215
source (node version) for Paris Cloud native meeting of december 14th 2016

##### Reminder :

````
  template:
    metadata:
      ...
    spec:
      containers:
        - name: cnp
          ...
          ports:
            - containerPort: 8080
              protocol: TCP
          env:
            - name: OPENSHIFT_NODEJS_IP
              valueFrom:
                fieldRef:
                  apiVersion: v1
                  fieldPath: status.podIP
