import { PlusCircle } from "phosphor-react-native";
import { useState } from "react";
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert, Image } from "react-native";
import Header from "../../components/Header";
import Task from "../../components/Task";
import { styles } from "./style";

export default function Home(){
  const [task, settask] = useState<string[]>([]);
  const [taskName, settaskName] = useState('');

  const [counter, setCounter] = useState(0)
  const [completed, setCompleted] = useState(0)

 
  function handleParticipantAdd() {
    if(task.includes(taskName)) {
    return Alert.alert("Task ja existe", "Ja existe uma task na lista com esse nome" )
    }

    settask(prevState => [...prevState, taskName])
    settaskName('');

    setCounter(counter + 1)
  }

  function handleParticipantRemove(name: string) {
  
    Alert.alert("Remover", `Remover a task ${name}?`, [
      {
        text: 'Sim',
        onPress: () => settask(prevState => prevState.filter(task => task !== name))

      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])


    console.log(`Você removeu a task ${name}`)

    setCompleted(completed + 1)
  }

  return (
    <View style={styles.container}>
      
      <Header />
     
      <View style={styles.form}>
        <TextInput 
          style={styles.textInput} 
          placeholder="Adicione uma nova terefa"
          placeholderTextColor='#6B6B6B'
          onChangeText={text => settaskName(text)}
          value={taskName}
          />


        <TouchableOpacity 
          style={styles.button} 
          onPress={handleParticipantAdd}
         
        
        >

          <PlusCircle size={25} color="#F2F2F2"/>

        </TouchableOpacity>
        </View>

        <View style={styles.counts}>

          <Text style={styles.criadas}>Criadas </Text>
          <View style={styles.created}>
            <Text style={styles.counterCreated}>{counter}</Text>
          </View>

           <Text style={styles.concluidas}>Concluidas </Text>
           <View style={styles.created}>
            <Text style={styles.counterCreated}>{completed}</Text>
          </View>
        </View>

        <FlatList 
          data={task}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <Task
            key={item}
            task={item}
            onRemove={() => handleParticipantRemove(item)}
            />
            )}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={() => (
              <View>
                 <Image 
                 style={styles.img}
                  source={require('../../../assets/Clipboard.png')} 
                />
                 <Text style={styles.listEmptyText}>
                  Você ainda não tem tarefas cadastradas
                </Text>
                <Text style={styles.listEmptyText1}>
                  Crie tarefas e organize seus itens a fazer
                </Text>
               
              </View>
            )}
        />    
     
    </View>
  )
}