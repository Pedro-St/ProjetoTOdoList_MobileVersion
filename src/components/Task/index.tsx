
import { Trash } from "phosphor-react-native"
import { useState } from "react"
import { Text, TouchableOpacity, View } from "react-native"

import { CheckBox} from 'react-native-elements'
import { styles } from "./style"

type Props = {
  task: string;
  onRemove: () => void;
}

export default function Task({task, onRemove}: Props) {
  const [isSelected, setSelected] =useState(false)


  return(
    <View style={styles.container}>

      <View style={styles.check}>
        <CheckBox 
          checkedIcon="check"
          uncheckedIcon="circle-o"
          checkedColor="#5E60CE"
          uncheckedColor="#4EA8DE"
          checked={isSelected}
          onPress={() => setSelected(!isSelected)}

        />

        <Text style={styles.textDecoration} > 
          {task}
        </Text>

          <View style={styles.trash}>
            <TouchableOpacity onPress={onRemove}>
              <Trash size={25} weight="bold" color="#808080" />
            </TouchableOpacity>
          </View>
          
      </View>

    </View>
  )
}