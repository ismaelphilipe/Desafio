A = [3,2,4,1,5]

n = len(A)  #len retorna o comprimento do array

# Percorre o arranjo A.
for i in range(n):

  # Encontra o elemento mínimo em A.
    minimo = i
    for j in range(i + 1, n):
        if A[minimo] > A[j]:
            minimo = j
  
  # Coloca o elemento mínimo na posição correta.
    A[i], A[minimo] = A[minimo], A[i]

print(A)
