# Algorith Deikstra

graph = {}
graph["start"] = {"A": 6, "B": 2}
graph["A"] = {"finish": 1}
graph["B"] = {"A": 3, "finish": 5}
graph["finish"] = {}

print(graph.keys())

#  Code creating tables of cost:
infinity = float("ing")

costs = {}
costs["a"] = 6
costs["b"] = 2
costs["fin"] = infinity

parents = {}
parents["a"] = "start"
parents["b"] = "start"
parents["fin"] = None

#  processed nodes
processed = []


def find_lowest_cost_node(costs):
    lowest_cost = float("inf")  #  бесконечность
    lowest_cost_node = None #  самый дешевый узео
    for node in costs: # перебираем все узлы стоимостей
        cost = costs[node]
        if cost < lowest_cost and node not in processed: # если стоимость самая низкая и нода не проверена
            lowest_cost = cost
            lowest_cost_node = node

    return lowest_cost_node


node = find_lowest_cost_node(costs) # берем узел с самой низкой стоимостью среди необработанных
while node is not None: # если обработаны все узлы цикл завершается
    cost = costs[node]
    neighbors = graph[node]
    for n in neighbors.keys():
        new_cost = cost + neighbors[n]
        if costs[n] > new_cost:
            costs[n] = new_cost
            parents[n] = node

    processed.append(node)
    node = find_lowest_cost_node(costs)