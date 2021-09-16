import { Component, OnDestroy, OnInit } from '@angular/core';
import { iEscola } from '../core/models/escola.model';
import { EscolaService } from '../core/services/escola.service';

@Component({
  selector: 'app-escolas',
  templateUrl: './escolas.component.html',
  styleUrls: ['./escolas.component.scss']
})
export class EscolasComponent implements OnInit, OnDestroy {
  escola!: iEscola;

  constructor(private readonly escolaService: EscolaService) { 
    this.escola = {
      username: 'batista',
      nome: 'Colégio Batista Santos Dumont',
      endereço: 'Desconhecido',
      cidade: 'Fortaleza',
      estado: 'CE'
    }

  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  salvar() {
    console.log('chamou o componente');
    this.escolaService.create(this.escola).subscribe( res => {});
  }

}

