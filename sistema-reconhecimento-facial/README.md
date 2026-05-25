# Sistema de Reconhecimento Facial

Projeto com front-end em HTML, CSS e JavaScript usando modelo exportado pelo Teachable Machine.

## Como rodar o front-end

1. Abra a pasta `frontend`.
2. Use uma extensão como Live Server no VS Code.
3. Abra `index.html`.
4. Permita o uso da câmera.

> Não abra apenas clicando no arquivo se der erro no modelo. O ideal é rodar com servidor local.

## Modelo

Os arquivos do modelo ficam em:

frontend/my_model/
├── model.json
├── metadata.json
└── weights.bin

## Observação

O modelo enviado possui apenas uma classe: `Julio`.
Para reconhecer mais pessoas, treine novas classes no Teachable Machine e substitua os arquivos da pasta `my_model`.
