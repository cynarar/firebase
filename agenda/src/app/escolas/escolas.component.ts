import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { iEscola } from '../core/models/escola.model';
import { EscolaService } from '../core/services/escola.service';

@Component({
  selector: 'app-escolas',
  templateUrl: './escolas.component.html',
  styleUrls: ['./escolas.component.scss']
})
export class EscolasComponent implements OnInit, OnDestroy {
  escola!: iEscola;
  listaEscolas$: Observable<Array<iEscola>> = this.escolaService.escolas;

  constructor(private readonly escolaService: EscolaService) { 
    this.escola = {
      id: '1',
      username: 'batista',
      nome: 'Colégio Batista Santos Dumont',
      endereco: 'Desconhecido',
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

  apagar(escola: iEscola) {
    this.escolaService.destroy(escola).subscribe( res => {});
  }

}

