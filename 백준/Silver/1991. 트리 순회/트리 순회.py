import sys
N = int(sys.stdin.readline().strip())
tree = {}

for n in range(N):
    root, left, right = sys.stdin.readline().strip().split()
    tree[root] = [left, right]

def preorder(root):
    if root != '.':
        print(root, end="")
        preorder(tree[root][0]) # left
        preorder(tree[root][1]) # right

# inorder
def inorder(root):
    if root != '.':
        inorder(tree[root][0]) # left
        print(root, end="")
        inorder(tree[root][1]) # right

# postorder
def postorder(root):
    if root != '.':
        postorder(tree[root][0]) # left
        postorder(tree[root][1]) # right
        print(root, end="")

# 항상 A가 루트 노드가 된다
preorder('A')
print()
inorder('A')
print()
postorder('A')